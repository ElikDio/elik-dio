import { AnimatePresence } from 'framer-motion';
import React from 'react';
import './App.scss';
import { Experience } from './components/pages/expeirence/Experience';
import { Main } from './components/pages/main/Main';
import { Projects } from './components/pages/projects/Projects';
import { Stack } from './components/pages/stack/Stack';
import { FullScreenSection } from './components/ui/fullscreen/FullScreenSection';

export const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <FullScreenSection>
          <Main key="main" />
        </FullScreenSection>
        <FullScreenSection>
          <Stack key="stack" />
        </FullScreenSection>
        <FullScreenSection>
          <Projects key="projects" />
        </FullScreenSection>
        <FullScreenSection>
          <Experience key="experience" />
        </FullScreenSection>
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
