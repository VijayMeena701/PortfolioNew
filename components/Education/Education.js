import React from 'react';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, Name, BoxText, ItalicTitle, Img, RelevantBox } from './EducationStyles';

const data = [
    {
        image: '/images/IIITDMK.png',
        name: 'Indian Institute of Information Technology Design & Manufacturing, Kancheepuram',
        title: 'B.Tech - Computer Science Engineering + M.Tech - Computer Science Engineering with Specialization in System Design.',
        year: '2018-2023',
        details: ["Current CGPA: 7.3", "Max CGPA: 8.2", "Data Structures & Algorithms", "Database Management Systems", "Operating Systems", "Compiler Design", "Computer Networks", "Advanced Data Structures & Algorithms"]
    },
    {
        image: '/images/NEHS.png',
        name: 'New English Jr. College, Ulhasnagar',
        title: 'Senior Secondary',
        year: '2015 - 2017',
        details: ["Percentage: 78%", "Aggregate: 82%(PCM)", "Board: Maharashtra State Board (HSC)", "Subjects: PCM with Electronics Bifocal"]
    },

    {
        image: '/images/GEMS.png.png',
        name: 'Gurukul International School, Badlapur',
        title: 'High School',
        year: '2012 - 2015',
        details: ["Percentage: 91%", "Aggregate: 93%", "Board: Maharashtra State Board (SSC)"]
    },
]

const Education = () => {
    return (
        <Section id="education">
            <SectionTitle >Education</SectionTitle>
            <Boxes>
                {data.map((item, index) => {
                    return (
                        <Box key={index}>
                            <Img alt={item.title} src={item.image} />
                            <br />
                            <Name>{item.name}</Name>
                            <br />
                            <ItalicTitle>{item.title}</ItalicTitle>
                            <br />
                            <BoxNum>{item.year}</BoxNum>
                            <br />
                            <RelevantBox>
                                <BoxText fontsize="20px">Relevent Details</BoxText>
                                <ul style={{ listStyle: 'disc', marginLeft: '1.75rem' }}>
                                    {item.details.map((list, index) => {
                                        return (
                                            <li key={index}><BoxText>{list}</BoxText></li>
                                        )
                                    })}
                                </ul>
                            </RelevantBox>
                        </Box>)
                })}
            </Boxes>
            <SectionDivider />
        </Section>
    )
}

export default Education