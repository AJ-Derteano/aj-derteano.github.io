import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Post, Skill, UnderlineTitle } from '../../components';
import fs from 'vite-plugin-fs/browser';
import { parse } from 'yaml';
import { FormattedMessage } from 'react-intl';

const Skills = () => {
  const [iconSkills, setIconSkills] = useState([]);
  const [iconPath, setIconPath] = useState('');

  useEffect(() => {
    const getSkillIcons = async () => {
      let skillIcons = await fs.readFile('./src/skills.yml', 'utf8');
      skillIcons = parse(skillIcons);

      const { default_path: defaultPath, group_by: groupBy } = skillIcons.icons;

      setIconPath(defaultPath);

      let skill = [];
      for (const group of Object.keys(groupBy)) {
        skill = [...skill, ...Object.values(groupBy[group])];
      }

      setIconSkills(skill);
    };

    getSkillIcons();
  }, []);

  return (
    <SkillsStyle>
      <TitleSection>
        <FormattedMessage
          id='skill.softskill'
          defaultMessage='Habilidades blandas'
        />
      </TitleSection>

      <UnderlineTitle margin='2rem auto' />

      <div>
        <p>
          <FormattedMessage
            id='skill.softskill.description'
            defaultMessage='Conocimientos técnicos'
          />
        </p>
      </div>

      <UnderlineTitle
        width='100%'
        height='2px'
        margin='2rem auto'
        bgColor='#cbcbcb48'
      />

      <TitleSection>
        <FormattedMessage
          id='skill.hardskill'
          defaultMessage='Conocimientos técnicos'
        />
      </TitleSection>

      <UnderlineTitle margin='2rem auto' />

      <section>
        {iconSkills.map((iconSkill, i) => (
          <Skill
            key={i}
            technology={iconSkill.name}
            information=''
            web={iconSkill.web}
            svgSrc={iconPath + iconSkill.icon}
            iconColor={iconSkill.color}
            width='50px'
            height='50px'
          />
        ))}
      </section>
    </SkillsStyle>
  );
};

const SkillsStyle = styled.div`
  div {
    p {
      margin: 0 auto;
      text-align: justify;
    }
  }
  section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

    @media screen and (max-width: 780px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
  }
`;

const TitleSection = styled.h4`
  margin: 1rem 0;
  text-align: center;
  font-size: 2.1rem;
  font-weight: 700;
`;

export default Skills;
