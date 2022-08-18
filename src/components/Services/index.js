import React from 'react';
import Icon1 from '../../images/1.svg';
import Icon2 from '../../images/1.svg';
import Icon3 from '../../images/1.svg';
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, 
    ServicesIcon, ServicesCard, ServicesP } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>
            Nuestros Servicios
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Penal</ServicesH2>
                <ServicesP>Derecho Penal</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Penal 2</ServicesH2>
                <ServicesP>Derecho Penal 2</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Penal 2</ServicesH2>
                <ServicesP>Derecho Penal 2</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;