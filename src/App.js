import React from 'react';
import { Intro, About, Projects, Footer } from './components/'
import { AppWrapper } from './styles'


function App() {
  return (
    <AppWrapper>
      <Intro/>
      <About />
      <Projects />
      <Footer/>
    </AppWrapper>
  );
}

export default App;
