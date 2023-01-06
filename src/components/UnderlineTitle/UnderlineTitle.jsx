import React from 'react';
import styled from 'styled-components';

const UnderlineTitle = ({
  width = '60px',
  height = '3px',
  bgColor = '#5bc0de',
  margin = '10px auto',
}) => {
  return (
    <UnderlineTitleStyle
      width={width}
      height={height}
      bgColor={bgColor}
      margin={margin}
    />
  );
};

export const UnderlineTitleStyle = styled.div((props) => ({
  width: props.width,
  height: props.height,
  backgroundColor: props.bgColor,
  margin: props.margin,
  padding: 0,
}));

export default UnderlineTitle;
