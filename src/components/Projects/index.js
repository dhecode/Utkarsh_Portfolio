import React from 'react';
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Here are some of my projects.
        </Desc>
        <CardContainer>
          {projects
            .filter((item) => item.category === 'web app')
            .map((project, index) => (
              <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;