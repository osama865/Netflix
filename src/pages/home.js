import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron';
import FooterContainer from '../containers/footer';
import { AccordionContainer } from '../containers/accordion';
import HeroContainer from '../containers/hero';
import { Feature, OptForm } from '../components';

export default function Home() {
  return (
    <>
      <HeroContainer>
        <Feature>
          <Feature.Title>Unlimited films. TV programs and more</Feature.Title>
          <Feature.SubTitle>Watch anywhere . cancle any time</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Ready to Watch ? Enter ur email!</OptForm.Text>
          </OptForm>
        </Feature>
      </HeroContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}
