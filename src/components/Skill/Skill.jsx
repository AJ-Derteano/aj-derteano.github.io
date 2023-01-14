import styled from 'styled-components';
import { motion } from 'framer-motion';

const Skill = ({
  category,
  technology,
  active,
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
    </motion.div>
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
