import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
    { number: 3, text: 'Open Source Projects' },
    { number: 10, text: 'Projects', },
    { number: 3, text: 'Years of Experience in MERN Stack', },
    { number: 10, text: 'Github Stars', }
];

const Acomplishments = () => (
    <Section>
        <SectionTitle>Personal Achievements</SectionTitle>
        <Boxes>
            {data.map((card, index) => (
                <Box key={index}>
                    <BoxNum>{`${card.number}+`}</BoxNum>
                    <BoxText>{card.text}</BoxText>
                </Box>
            ))}
        </Boxes>
        <SectionDivider divider />
    </Section>
);

export default Acomplishments;