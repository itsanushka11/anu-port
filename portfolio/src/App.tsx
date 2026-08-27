import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificate from './components/Certificate';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificate />
      <Achievements />
      <Footer />
    </>
  );
}
