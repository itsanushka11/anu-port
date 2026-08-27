#!/bin/bash
set -e

echo "🚀 Deploying Portfolio to GitHub..."
echo ""

# Check for git
if ! command -v git &> /dev/null; then
    echo "❌ Git not found. Please install Xcode Command Line Tools:"
    echo "   Run: xcode-select --install"
    echo "   Or install Homebrew: /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
    echo "   Then: brew install git"
    exit 1
fi

# Check for gh CLI
if ! command -v gh &> /dev/null; then
    echo "⚠️  GitHub CLI (gh) not found. Installing..."
    if command -v brew &> /dev/null; then
        brew install gh
    else
        echo "Please install gh manually: https://cli.github.com/"
        exit 1
    fi
fi

# Login to GitHub
echo "📋 Login to GitHub..."
gh auth login

# Create repo
echo "📦 Creating GitHub repository..."
gh repo create anu-port --public --source=. --push 2>/dev/null || echo "Repo may already exist, pushing..."

# Add and commit
git init
git add .
git commit -m "🚀 Deploy portfolio website with React + TypeScript"

# Push
git branch -M main
git remote add origin https://github.com/$(gh api user -q '.login')/anu-port.git 2>/dev/null || true
git push -u origin main --force

echo ""
echo "✅ Deployed! GitHub Actions will build and deploy to Pages."
echo "🔗 Check: https://github.com/$(gh api user -q '.login')/anu-port/actions"
