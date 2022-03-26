import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
    <Container>
        <Div1>
            <Link href="/">
                <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
                    <DiCssdeck size="3rem" /> <span>Vijay Meena</span>
                </a>
            </Link>
        </Div1>
        <Div2>
            <li>
                <Link href="#projects" passHref>
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#tech" passHref>
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#about" passHref>
                    <NavLink>About</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#education" passHref>
                    <NavLink>Education</NavLink>
                </Link>
            </li>
        </Div2>
        <Div3>
            <SocialIcons aria-label='github' rel="noreferrer noopener" target="_blank" href="https://www.github.com/VijayMeena701">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons aria-label='linked in' rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/vijay-meena-02920a17a/">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons aria-label='instagram' rel="noreferrer noopener" target="_blank" href="https://www.instagram.com/viju_meena/">
                <AiFillInstagram size="3rem" />
            </SocialIcons>
        </Div3>
    </Container>
);

export default Header;