import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import UnderlineTitle from '../../components/UnderlineTitle/UnderlineTitle';
import { Post } from '../../components';

const AboutMe = () => {
  return (
    <AboutMeStyle>
      <h2>
        <FormattedMessage id='about-me.title' defaultMessage='Sobre mi' />
      </h2>

      <UnderlineTitle margin='2rem auto' />

      <p className='title-description'>
        <FormattedMessage id='about-me.text-1' defaultMessage='' />
      </p>

      <Post imgSrc='/dev_productivity.svg' imgAlt='productivity' />

      <UnderlineTitle
        width='100%'
        height='2px'
        margin='2rem auto'
        bgColor='#cbcbcb48'
      />

      <Post
        direction='rtl'
        imgSrc='/inspiration.svg'
        imgAlt='Inspiration'
      />

      <UnderlineTitle
        width='100%'
        height='2px'
        margin='2rem auto'
        bgColor='#cbcbcb'
      />
    </AboutMeStyle>
  );
};

export const AboutMeStyle = styled.section`
  h2 {
    text-align: center;
    font-size: 2.1rem;
    font-weight: 700;
  }

  p {
    font-size: 16px;
    line-height: 1.5rem;
    letter-spacing: 0.5px;

    font-weight: 400;
  }

  .title-description {
    text-align: center;
  }
`;

export default AboutMe;
