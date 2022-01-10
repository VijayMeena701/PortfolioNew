import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href="tel:705-7875-159">705-7875-159</LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:govardhanmeena701@gmail.com">
                        govardhanmeena701@gmail.com
                    </LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>Innovating one project at a time</Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons aria-label='github' rel="noreferrer noopener" target="_blank" href="https://www.github.com/VijayMeena701">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons aria-label='linked in' rel="noreferrer noopener" target="_blank" href="https://www.github.com/VijayMeena701">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                    <SocialIcons aria-label='instagram' rel="noreferrer noopener" target="_blank" href="https://www.github.com/VijayMeena701">
                        <AiFillInstagram size="3rem" />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;