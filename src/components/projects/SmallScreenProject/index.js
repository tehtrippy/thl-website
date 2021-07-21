import React from 'react';
import Project from '../Project';
import { ProjectCard } from '../../cards';
import { translate } from '@docusaurus/Translate';
import SmallScreenHeader from '../../header/SmallScreenHeader';

const SmallScreenProject = ({ projects }) => {
  return (
    <Project
      topContent={
        <SmallScreenHeader text={translate({ message: 'projects.title' })} />
      }
      centerContent={projects.map((project, key) => (
        <ProjectCard
          {...project}
          key={key}
          className="col col--12"
          style={{ marginTop: '60px' }}
        />
      ))}
    />
  );
};

export default SmallScreenProject;
