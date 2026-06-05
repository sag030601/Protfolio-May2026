import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Hero from './sections/Hero';
import { useTheme } from './hooks/useTheme';

const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Experience = lazy(() => import('./sections/Experience'));
const Projects = lazy(() => import('./sections/Projects'));
const Achievements = lazy(() => import('./sections/Achievements'));
const Contact = lazy(() => import('./sections/Contact'));

function SectionLoader() {
  return <div className="h-16" aria-hidden="true" />;
}

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0b1120] dark:text-slate-100">
      <ScrollProgress />
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
