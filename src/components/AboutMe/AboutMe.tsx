import { Image } from 'antd-mobile';
import React from 'react';
import styled from 'styled-components';
import isMobile from 'ismobilehook';
import avatarImg from '@/assets/Avatar.jpeg';

const AboutMe: React.FC = () => {
  return (
    <AboutMeStyle>
      {isMobile() && <Image src={avatarImg} />}

      <h1>Hola!. Soy Andrés Derteano</h1>

      <p>
        Soy un desarrollador de software apasionado por aprender y enseñar. Me
        encanta trabajar con React y React Native, pero siempre busco probar
        cosas nuevas.
      </p>
    </AboutMeStyle>
  );
};

export const AboutMeStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  img {
    width: 60%;
    border-radius: 50%;
    margin: 0 auto;
  }

  p {
    text-align: justify;
  }
`;

export default AboutMe;
