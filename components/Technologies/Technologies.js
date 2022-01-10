import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
    <Section id="tech">
        <SectionDivider divider />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            Ive worked with a range a technologies in the web development world.
            From Back-end To Design
        </SectionText>
        <List>
            <ListItem>
                <picture>
                    <DiReact size="3rem" />
                </picture>
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Experiece with <br />
                        React.js, Next.js & Svelte
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <picture>
                    <DiFirebase size="3rem" />
                </picture>
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        Node, Express, Flask, Django and Databases like MongoDB,PostgresSQL, Firebase Firestore,etc
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <picture>
                    <DiZend size="3rem" />
                </picture>
                <ListContainer>
                    <ListTitle>UI/UX</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        tools like Figma, Sketch
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
        <SectionDivider colorAlt />
    </Section>
);

export default Technologies;