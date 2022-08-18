import React from 'react';
import { Column2, ImgWrap, ProfileContainer, ProfileWrapper, ProfileRow, Column1, 
    TextWrapper, TopLine, Heading, Subtitle, Img } from './ProfileSection.Elements';
import { SocialIconLink } from '../Footer/Footer.Elements';
import { FaLinkedin } from 'react-icons/fa';


const ProfileSection = ({lightBg, id, imgStart, topline, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark}) => {
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
                            <SocialIconLink href="https://www.linkedin.com/in/agust%C3%ADn-alsina-22676861/?originalSubdomain=ar" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
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

export default ProfileSection;