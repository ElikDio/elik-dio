import React from 'react';
import { Main } from './components/pages/main/Main';
import { Projects } from './components/pages/projects/Projects';
import { Stack } from './components/pages/stack/Stack';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Main />
      {/* <Stack /> */}
      {/* <Projects /> */}
    </div>
  );
};
