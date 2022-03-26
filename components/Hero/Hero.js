import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typewriter from 'typewriter-effect';

const Hero = (props) => {
    const [buttonVisible, setButtonVisible] = React.useState(false);
    return (
        <>
            <Section row nopadding nomargin>
                <LeftSection nomargin={true}>
                    <SectionTitle main center>
                        Hi <br />
                        I&apos;m Vijay
                    </SectionTitle>
                    <SectionText full={true}>
                        <Typewriter onInit={(e) => e.typeString("I'm a Creative Web Designer and Developer.").pauseFor(1000).typeString(" I have experience in React & Next Frontend Technologies and Node & Mongo, Firebase").deleteChars(17).pauseFor(1000).typeString(", Mongo & Firebase Backend Technologies.").pauseFor(1000).typeString(" Checkout my works below and feel free to get in touch.").callFunction(() => setButtonVisible(true)).pauseFor(2500).start()} options={{ loop: true }} />
                    </SectionText>
                    {buttonVisible && <Button aria-label="learn More" onClick={props.handleClick}>Learn More</Button>}
                </LeftSection>
            </Section>
        </>
    )
};

export default Hero;