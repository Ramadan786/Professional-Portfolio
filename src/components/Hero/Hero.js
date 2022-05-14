import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section  row nopadding >
    <LeftSection>
      <SectionTitle main center>

        Welcome To <br />
        My Personal Portfolio

      </SectionTitle>
      <SectionText>
        I am React, Node.js developer looking forward to solve coding problem.
      </SectionText>
      <Button onClick={()=> window.location= 'https://www.google.com/'}>Learn More </Button>
    </LeftSection>



  </Section>
);

export default Hero;