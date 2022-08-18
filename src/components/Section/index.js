import React from 'react'
import { Button } from '../Button.Element';
import { Column2, ImgWrap, ProfileContainer, ProfileWrapper, ProfileRow, Column1, 
    TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img } from './Section.Elements';


const Section = ({lightBg, id, imgStart, topline, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark}) => {
  return (
    <>
        <ProfileContainer lightBg={lightBg} id={id}>
            <ProfileWrapper>
                <ProfileRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topline}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to="" smooth={true} duration={500} spy={true} exact='true'  
                                offset={-80} primary={primary} dark={dark}>
                                    {buttonLabel}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </ProfileRow>
            </ProfileWrapper>            
        </ProfileContainer>
    </>
  )
}

export default Section;