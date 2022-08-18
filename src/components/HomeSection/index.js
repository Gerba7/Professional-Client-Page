import React from 'react';
import { HomeSectionContainer, HomeBg, VideoBg, HomeContent, HomeBtnWrapper, 
  HomeH1, HomeP, ArrowForward, ArrowRight } from './HomeSection.Elements';
import { Button } from '../Button.Element';
import Video from '../../videos/video.mp4';
import { useState } from 'react';

const HomeSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
      setHover(!hover);
    };


  return (
    <HomeSectionContainer>
        <HomeBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HomeBg>
        <HomeContent>
          <HomeH1>AGUSTíN ALSINA</HomeH1>
          <HomeP>
            Abogado Especializado en Derecho Penal
          </HomeP>
          <HomeBtnWrapper>
            <Button to="" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
              Contacto {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HomeBtnWrapper>
        </HomeContent>
    </HomeSectionContainer>
  )
}

export default HomeSection;