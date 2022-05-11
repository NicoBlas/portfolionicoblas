import React from 'react'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ListParagraph } from '../Technologies/TechnologiesStyles';
const About = () => {
  return (
    <Section id="about">
        <SectionTitle>About Me</SectionTitle>
        <ListParagraph>
            Hi, i am Nicolas Blasutig, 22 years old developer from Argentina. Passionate for learning something new every day.
            
        </ListParagraph>
        <ListParagraph>
            I speak English and Spanish.   
            
        </ListParagraph>
        <ListParagraph>
            I learned to code in a bootcamp from Digital House and also from my own. College Marketing student as well.
            
        </ListParagraph>
        <ListParagraph>
            In my free time i like going to the Gym, knowing new people, reading about technology and research on Crypto market.
            
        </ListParagraph>
        <ListParagraph>
            I am really looking forward to joining a team, add value and learning new things.
            
        </ListParagraph>
        <ListParagraph>
            Feel free to contact me : )
            
        </ListParagraph>
    </Section>
  )
}

export default About