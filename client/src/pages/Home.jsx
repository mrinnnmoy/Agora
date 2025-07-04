import React from 'react';

import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Steps from '../components/Steps';
import Roadmap from '../components/Roadmap';
import NFTs from '../components/NFTs';
import Team from '../components/Team';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <About />
            <Steps />
            <Roadmap />
            <NFTs />
            <Team />
            <Blog />
            <Contact />
            <Newsletter />
        </>
    )
};

export default Home;