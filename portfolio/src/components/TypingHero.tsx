import { useEffect, useState } from 'react';

const roles = [
  'Business Analyst',
  'Data Visualization Expert',
  'Finance Enthusiast',
  'Generative AI Practitioner',
  'Problem Solver',
];

export default function TypingHero() {
  const [text, setText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), 2000);
          }
        } else {
          setText(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setRoleIdx((r) => (r + 1) % roles.length);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <span className="typing-text">
      {text}
      <span className="cursor">|</span>
    </span>
  );
}
