import React from 'react'
import { useState } from 'react';
import HomeSection from '../components/HomeSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProfileSection from '../components/ProfileSection';
import Services from '../components/Services';
import { SPAObjOne } from '../components/ProfileSection/SectionData';
import { SPAObjTwo, SPAObjThree } from '../components/Section/SectionData';
import Footer from '../components/Footer';
import Section from '../components/Section';
import { WhatsappLink } from '../components/WhatsappLink';
import WLogo from '../images/WAppLogo.png';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HomeSection />
        <ProfileSection {...SPAObjOne}/>
        <Section {...SPAObjTwo}/>
        <Section {...SPAObjThree}/>
        <Services />
        <Footer />
        <WhatsappLink href="https://api.whatsapp.com/send?phone=5491126407905">
          <img src={WLogo} alt="Whatsapp" style={{height: '3rem', width: '3rem'}}/>
        </WhatsappLink>
    </>
  )
}

export default Home;