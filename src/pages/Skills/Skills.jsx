import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ButtonCategory, Skill, UnderlineTitle } from '../../components';
import fs from 'vite-plugin-fs/browser';
import { parse } from 'yaml';
import { FormattedMessage } from 'react-intl';
import { motion } from 'framer-motion';
import uuid from 'react-uuid';

const Skills = () => {
  const [iconSkills, setIconSkills] = useState([]);
  const [categorySkills, setCategorySkills] = useState([]);
  const [filterCategory, setFilterCategory] = useState('all');
  const [iconPath, setIconPath] = useState('');

  useEffect(() => {
    const getSkillIcons = async () => {
      /**
       * Leer el archivos de habilidades
       */
      let skillIcons = await fs.readFile('./src/skills.yml', 'utf8');

      /**
       * Convertir los datos del archivo a un objeto
       */
      skillIcons = parse(skillIcons);

      /**
       * Destructurar el path de la ubicacion y los iconos agrupados
       */
      const { default_path: defaultPath, group_by: groupBy } = skillIcons.icons;

      /**
       * Agregar la ubicacion del icono
       */
      setIconPath(defaultPath);

      /**
       * Agregar las categorias
       */
      setCategorySkills(Object.keys(groupBy));

      /**
       * Guardar los nombres de las habilidades y asignar los
       */
      let skill = [];
      for (const group of Object.keys(groupBy)) {
        if (filterCategory === group || filterCategory === 'all') {
          const setCategorySkill = Object.values(groupBy[group]).map(
            (skill) => ({
              ...skill,
              ...{ category: group },
            })
          );
          skill = [...skill, ...setCategorySkill];
        }
      }
      setIconSkills(skill);
    };

    /**
     * Obtener los iconos de las habilidades
     */
    getSkillIcons();
  }, [filterCategory]);

  return (
    <SkillsStyle>
      <section>
        <TitleSection>
          <FormattedMessage
            id='skill.softskill'
            defaultMessage='Habilidades blandas'
          />
        </TitleSection>

        <UnderlineTitle margin='2rem auto' />

        <article>
          <p>
            <FormattedMessage
              id='skill.softskill.description'
              defaultMessage='Conocimientos técnicos'
            />
          </p>
        </article>
      </section>

      <UnderlineTitle
        width='100%'
        height='2px'
        margin='2rem auto'
        bgColor='#cbcbcb48'
      />

      <section>
        <TitleSection>
          <FormattedMessage
            id='skill.hardskill'
            defaultMessage='Conocimientos técnicos'
          />
        </TitleSection>

        <UnderlineTitle margin='2rem auto' />

        <div className='filterCategory'>
          <ButtonCategory
            key={uuid()}
            category='all'
            active={filterCategory === 'all'}
            setFilterCategory={setFilterCategory}
            text={
              <FormattedMessage
                id='skill.category.all'
                defaultMessage='Todos'
              />
            }
          />
          {categorySkills.map((category) => (
            <ButtonCategory
              key={uuid()}
              category={category}
              active={filterCategory === category}
              setFilterCategory={setFilterCategory}
              text={
                <FormattedMessage
                  id={`skill.category.${category}`}
                  defaultMessage={category}
                />
              }
            />
          ))}
        </div>

        <div>
          {iconSkills.map((iconSkill) => (
            <Skill
              key={uuid()}
              category={iconSkill.category}
              active={filterCategory}
              technology={iconSkill.name}
              web={iconSkill.web}
              svgSrc={iconPath + iconSkill.icon}
              iconColor={iconSkill.color}
              width='50px'
              height='50px'
            />
          ))}
        </div>
      </section>
    </SkillsStyle>
  );
};

const SkillsStyle = styled.div`
  section article {
    p {
      margin: 0 auto;
      text-align: justify;
    }
  }

  section div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 3fr));
    grid-gap: 20px;

    @media screen and (max-width: 780px) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));
      grid-gap: 10px;
    }
  }

  .filterCategory {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 3fr));
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`;

const TitleSection = styled.h4`
  margin: 1rem 0;
  text-align: center;
  font-size: 2.1rem;
  font-weight: 700;
`;

export default Skills;
