import React from 'react'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle} from "../Technologies/TechnologiesStyles"

const Contact = () => {

    
  return (
      
    <Section id='contact'>
        <SectionTitle>Contact</SectionTitle>
        <List>
            <ListItem>
                <ListContainer>
                    <ListTitle>Gmail</ListTitle>
                    <ListParagraph>
                        nicolasblasutigdev@gmail.com
                    </ListParagraph>
                </ListContainer>
             </ListItem>

             <ListItem>
                <ListContainer>
                    <ListTitle>WhatSapp</ListTitle>
                    <ListParagraph>
                        +54 9 11 5329 6011
                    </ListParagraph>
                </ListContainer>
             </ListItem>

             <ListItem>
                <ListContainer>
                    <ListTitle>Linked In</ListTitle>
                    <ListParagraph>
                        https://www.linkedin.com/in/nicolasblasutig/
                    </ListParagraph>
                </ListContainer>
             </ListItem>


        </List>
        
      
    </Section>
  )
}

export default Contact