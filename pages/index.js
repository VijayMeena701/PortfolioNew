import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Education from '../components/Education/Education';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Head from 'next/head';

const Home = () => {
  return (<>
    <Head>
      <title>Vijay Meena | Home</title>
      <meta name="description" content="Meta description for the Home page" />
    </Head>
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
      <Education />
    </Layout>
  </>
  );
};

export default Home;