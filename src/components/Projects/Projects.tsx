import React from 'react';
import styled from 'styled-components';

const Projects: React.FC = () => {
  return (
    <ProjectsStl>
      Projects
      <ul>
        <li>Plataforma de afiliacion</li>
        <li>Meeting manager</li>
        <li>Luantec</li>
        <li>Plataforma de concurso</li>
      </ul>
    </ProjectsStl>
  );
};

export const ProjectsStl = styled.div``;

export default Projects;
