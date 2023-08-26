import { Image } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadSite: React.FC = () => {
  return (
    <LoadSiteStl>
      <Image src='./public/panda.gif' preview={false} />
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, y: 50 }}
      >
        Cargando...
      </motion.p>
    </LoadSiteStl>
  );
};

export const LoadSiteStl = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;
    font-size: 2rem;
  }
`;

export default LoadSite;
