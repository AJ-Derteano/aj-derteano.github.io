import React, { useEffect, useState } from 'react';
import { Divider, Image, Space, Tag, Typography } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import { YmlManager } from '@/utils';
import { IKnowledge } from './interfaces';
import { skillCategories } from '@/constants';

const Knowledge: React.FC = () => {
  const [knowledges, setknowledges] = useState<IKnowledge[]>([]);
  const [knowledgesFilters, setknowledgesFilters] = useState<IKnowledge[]>([]);

  useEffect(() => {
    (async () => {
      const _knowledges = await YmlManager.ymlToJson(
        'src/assets/knowledge.yml'
      );
      setknowledges(() => _knowledges.knowledge);
      setknowledgesFilters(() => _knowledges.knowledge);
    })();
  }, []);

  const handleFilter = (filter: string) => {
    console.log('filter', filter);
    if (filter === 'all') {
      setknowledgesFilters(knowledges);
    } else {
      const _knowledgesFilters = knowledges.filter((knowledge) =>
        knowledge.category.includes(filter)
      );
      setknowledgesFilters(_knowledgesFilters);
    }
  };

  const itemsPerRow = 9;

  const groupedItems = [];
  for (let i = 0; i < knowledgesFilters.length; i += itemsPerRow) {
    groupedItems.push(knowledgesFilters.slice(i, i + itemsPerRow));
  }

  return (
    <KnowledgeStl>
      <Typography.Title level={2}>Conocimientos</Typography.Title>
      <section>
        <p>
          A lo largo de mi desarrollo profesional he ido adquiriendo diferentes
          conocimientos, los cuales me han ayudado a desarrollarme profesional y
          y personal mente, entre los conocimientos adquiridos destaco las
          habilidades blandas para poder comunicar me efectivamente con
          compañero de equipos, jefes y subordinados.
        </p>

        <p>Te comparto mis conocimientos técnicos</p>
      </section>
      <br />
      <Space>
        <Tag
          color='#fefefe'
          style={{ ...tagStl, color: '#000' }}
          onClick={() => handleFilter(skillCategories.all)}
        >
          Todo
        </Tag>
        <Tag
          color='#3498db'
          style={tagStl}
          onClick={() => handleFilter(skillCategories.language)}
        >
          Lenguajes de programación
        </Tag>
        <Tag
          color='#27ae60'
          style={tagStl}
          onClick={() => handleFilter(skillCategories.frontend)}
        >
          Frontend
        </Tag>
        <Tag
          color='#9b59b6'
          style={tagStl}
          onClick={() => handleFilter(skillCategories.backend)}
        >
          Backend
        </Tag>
        <Tag
          color='#34495e'
          style={tagStl}
          onClick={() => handleFilter(skillCategories.database)}
        >
          Base de Datos
        </Tag>
        <Tag
          color='#246997'
          style={tagStl}
          onClick={() => handleFilter(skillCategories.testing)}
        >
          Pruebas y Depuración
        </Tag>
        <Tag
          color='#e74c3c'
          style={tagStl}
          onClick={() => handleFilter(skillCategories.tools)}
        >
          Herramientas
        </Tag>
        <Tag
          color='#f39c12'
          style={tagStl}
          onClick={() => handleFilter(skillCategories.other)}
        >
          Otros
        </Tag>
      </Space>
      <Divider />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        <AnimatePresence>
          {groupedItems?.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
              }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
              exit={{ opacity: 0, y: -50 }}
            >
              {row.map((knowledge) => (
                <span className='container-icon' key={knowledge.name}>
                  <Image
                    src={knowledge.icon}
                    width={80}
                    alt={knowledge.description}
                    preview={false}
                  />
                  <Typography.Text>{knowledge.name}</Typography.Text>
                </span>
              ))}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </KnowledgeStl>
  );
};

const tagStl: React.CSSProperties = {
  cursor: 'pointer',
};

export const KnowledgeStl = styled.div`
  p {
    font-size: 1.2rem;
  }

  .container-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1.5rem;

    img {
      background-color: #fefefe;
      border-radius: 50%;
      padding: 0.4rem;
      transition: all 0.3s ease-in-out;

      &:hover {
        /* border-radius: 10%; */
        scale: 1.5;
        cursor: pointer;
      }
    }
  }
`;

export default Knowledge;
