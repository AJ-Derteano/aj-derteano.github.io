import React from 'react';
import styled from 'styled-components';

const ButtonCategory = ({
  category,
  text,
  active = false,
  setFilterCategory,
}) => {
  const handleActiveButton = (category) => {
    setFilterCategory(category);
  };

  return (
    <ButtonCategoryStyle
      className={active && 'active'}
      onClick={() => handleActiveButton(category)}
    >
      {text}
    </ButtonCategoryStyle>
  );
};

export const ButtonCategoryStyle = styled.span`
  margin: 1rem;
  padding: 5px 15px;
  border: 1px solid #5bc0de;
  border-radius: 15px;
  transition: all 0.3s ease;

  &.active {
    background-color: #5bc0de;
    color: #fff;
  }

  &:hover {
    cursor: pointer;
    background-color: #5bc0de;
    color: #fff;
  }
`;

export default ButtonCategory;
