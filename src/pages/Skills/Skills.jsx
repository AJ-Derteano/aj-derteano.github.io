import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Skill } from '../../components';
import fs from 'vite-plugin-fs/browser';
import yaml from 'yaml';

const Skills = () => {
  const [iconSkill, setIconSkill] = useState([]);

  useEffect(() => {
    const getSkillIcons = async () => {
      let icons = await fs.readFile('./src/skills.yml');
      icons = await yaml.parse(icons);
      console.log(icons);
      setIconSkill(icons);
    };
    getSkillIcons();
  }, []);

  return (
    <SkillsStyle>
      {iconSkill.map((icon) => (
        <Skill
          key={icon.split('.').shift()}
          technology={icon.split('.').shift()}
          svgSrc={`/skill_icons/${icon}`}
          iconColor='#0db7ed'
        />
      ))}
    </SkillsStyle>
  );
};

export const SkillsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Skills;
