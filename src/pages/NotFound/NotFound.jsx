import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <NotFoundStyle>
      <h3>404 Page not found</h3>
      {/* <img src='./src/assets/page_not_found.svg' alt='Page not found' /> */}
    </NotFoundStyle>
  );
};

export const NotFoundStyle = styled.div`
  width: 100%;
  min-height: 80vh;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

export default NotFound;
