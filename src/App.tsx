import { AnimatePresence } from 'framer-motion';
import React from 'react';
import './App.scss';
import { Experience } from './components/pages/expeirence/Experience';
import { Main } from './components/pages/main/Main';
import { Projects } from './components/pages/projects/Projects';
import { Stack } from './components/pages/stack/Stack';
import { AnimatedSection } from './components/ui/animated-section/AnimatedSection';
import { useScrollNavigation } from './utils/useScrollNavigation';

const pages = [
  <Main key="main" />,
  <Stack key="stack" />,
  <Projects key="projects" />,
  <Experience key="experience" />,
];

export const App: React.FC = () => {
  const { page } = useScrollNavigation(pages.length);

  return (
    <>
      <div className="App">
        <AnimatePresence mode="wait">
          {<AnimatedSection key={page}>{pages[page]}</AnimatedSection>}
        </AnimatePresence>
      </div>
      <div className="AppMobile">
        <Main key="main" />
        <Stack key="stack" />
        <Projects key="projects" />
        <Experience key="experience" />
      </div>
    </>
  );
};
