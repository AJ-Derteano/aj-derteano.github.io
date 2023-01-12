import styled from 'styled-components';

const Skill = ({
  technology,
  information,
  web,
  svgSrc,
  width = '80px',
  height = '80px',
  color = '#000',
  iconColor = '#fff',
}) => {
  const handleClick = (url) => {
    window.open(url);
  };

  return (
    <SkillStyle
      onClick={(e) => {
        handleClick(web);
      }}
      iconColor={iconColor}
      color={color}
      src={svgSrc}
      width={width}
      height={height}
    >
      <span>
        <div />
      </span>
      <h4>{technology}</h4>
      {information ? <p>{information}</p> : ''}
    </SkillStyle>
  );
};

const SkillStyle = styled.article`
  display: inline-block;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
    span {
      cursor: pointer;
    }
  }

  h4 {
    color: ${(props) => props.color};
  }

  span {
    display: inline-block;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    /* padding: 0.5rem; */

    div {
      height: 100%;
      width: 100%;
      background-color: ${(props) => props.iconColor};
      mask-image: url(${(props) => props.src});
      -webkit-mask-size: contain;
      mask-size: contain;
      -webkit-mask-position: center;
      mask-position: center;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
    }
  }
`;

export default Skill;
