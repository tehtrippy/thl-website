import React from 'react';
import { translate } from '@docusaurus/Translate';
import { SmallScreenProject, LargeScreenProject } from '../../projects';
import ResponsiveScreen from '../../media-query/ResponsiveScreen';

const projects = [
  {
    title: translate({ message: 'projects.first.title' }),
    description: translate({ message: 'projects.first.description' }),
    image: '/img/projects/mangofox.svg',
    to: '#',
  },
  {
    title: translate({ message: 'projects.second.title' }),
    description: translate({ message: 'projects.second.description' }),
    image: '/img/projects/halabala.svg',
    to: '#',
  },
  {
    title: translate({ message: 'projects.third.title' }),
    description: translate({ message: 'projects.third.description' }),
    image: '/img/projects/station101.svg',
    to: '#',
  },
];

// order: a-z
projects.sort((a, b) => (a.title > b.title ? 1 : -1));

const ProjectsScreen = () => {
  return (
    <ResponsiveScreen
      largeContent={<LargeScreenProject projects={projects} />}
      smallContent={<SmallScreenProject projects={projects} />}
    />
  );
};

export default ProjectsScreen;
