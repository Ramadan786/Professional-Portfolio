import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:92-301-6263004">03016263004</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email:</LinkTitle>
      <LinkItem href="mailto:ramzanforyou786@gmail.com">Ramzanforyou@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialContainer>
      <SocialIcons href='https://github.com/Ramadan786'>
    <AiFillGithub  size="3rem" />
  </SocialIcons>
  <SocialIcons href='https://www.linkedin.com/mwlite/in/muhammad-ramzan-1bb263113'>
    <AiFillLinkedin  size="3rem" />
  </SocialIcons>
  <SocialIcons href='https://intagram.com'>
    <AiFillInstagram  size="3rem" />
  </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
