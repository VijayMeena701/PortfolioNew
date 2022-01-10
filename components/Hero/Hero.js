import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <>
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Hi <br />
                    I&apos;m Vijay
                </SectionTitle>
                <SectionText>
                    I&aps;m a Creative Web Designer and Developer.I have experience in React & Next Frontend Technologies and Node & Mongo, Firebase Backend Technologies. Checkout my works below and feel free to get in touch.
                </SectionText>
                <Button aria-label="learn More" onClick={props.handleClick}>Learn More</Button>
            </LeftSection>
        </Section>
    </>
);

export default Hero;