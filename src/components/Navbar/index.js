import React, { useState, useEffect } from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,
     NavBtn, NavBtnLink, LogoImg, LogoText } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import Logoimg from '../../images/LogoImg.svg';
import Logotext from '../../images/LogoText.svg';


const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
      window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };
    

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    <LogoImg src={Logoimg} alt="Logo Img" />
                    <LogoText src={Logotext} alt="Logo Text" />
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="profile" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Perfil
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="practice" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Practica
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="clients" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Clientes
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Servicios
                        </NavLinks>
                    </NavItem>
                    <NavBtn>
                        <NavBtnLink to="">Contacto</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;