import { Button, Result } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <NotFoundStyle>
      <Result
        status='404'
        title='Pagina no encontrada'
        subTitle='Lo sentimos, la página que visitaste no existe.'
        extra={
          <Button type='primary'>
            <Link to='/' type='primary'>
              Volver al inicio
            </Link>
          </Button>
        }
        style={{
          margin: 'auto',
        }}
      />
    </NotFoundStyle>
  );
};

export const NotFoundStyle = styled.div``;

export default NotFound;
