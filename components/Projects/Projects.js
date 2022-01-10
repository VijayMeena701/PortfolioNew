import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
    <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
            {projects.map((p, i) => {
                return (
                    <BlogCard key={i}>
                        <Img alt={p.title} src={p.image} />
                        <TitleContent>
                            <HeaderThree title>{p.title}</HeaderThree>
                            <Hr />
                        </TitleContent>
                        <CardInfo className="card-info">{p.description}</CardInfo>
                        <div>
                            <Hr />
                            <TagList>
                                {p.tags.map((t, i) => {
                                    return <Tag key={i}>{t}</Tag>;
                                })}
                            </TagList>
                        </div>
                        <UtilityList>
                            <li>
                                <ExternalLinks href={p.visit}>Code</ExternalLinks>
                            </li>
                            <li>
                                <ExternalLinks href={p.source}>Source</ExternalLinks>
                            </li>
                        </UtilityList>
                    </BlogCard>
                );
            })}
        </GridContainer>
    </Section>
);

export default Projects;