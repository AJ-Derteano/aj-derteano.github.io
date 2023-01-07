import styled from 'styled-components';

const Skill = ({
  technology,
  svgSrc,
  width = '40px',
  height = '40px',
  color = '#000',
  iconColor = '#fff',
}) => {
  return (
    <SkillStyle
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
    </SkillStyle>
  );
};

export const SkillStyle = styled.article`
  display: inline-block;
  text-align: center;

  h4 {
    color: ${(props) => props.color};
  }

  span {
    display: inline-block;
    width: ${(props) => props.width};
    height: ${(props) => props.height};

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
