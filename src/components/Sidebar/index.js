import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="profile" onClick={toggle}>
                    Perfil
                </SidebarLink>
                <SidebarLink to="practice" onClick={toggle}>
                    Practica
                </SidebarLink>
                <SidebarLink to="clients" onClick={toggle}>
                    Clientes
                </SidebarLink>
                <SidebarLink to="services" onClick={toggle}>
                    Servicios
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="" onClick={toggle}>Contacto</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
    
  )
}

export default Sidebar;