import React from 'react';
import { JumbotronContainer } from './containers/jumbotron';
import FooterContainer from './containers/footer';
import { AccordionContainer } from './containers/accordion';
import OptFormContainer from './containers/opt-form';

function App() {
  return (
    <>
      <JumbotronContainer/>
      <AccordionContainer/>
      <FooterContainer/>
    </>
  );
}

export default App;
