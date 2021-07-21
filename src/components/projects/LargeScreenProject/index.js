import React from 'react';
import { translate } from '@docusaurus/Translate';
import { ProjectCard } from '../../cards';
import Project from '../Project';
import { HighlightHeader } from '../../typography';
import styles from './styles.module.css';

const LargeScreenProject = ({ projects }) => {
  return (
    <Project
      topContent={
        <HighlightHeader
          centered={true}
          className={styles.headerText}
          text={translate({ message: 'projects.title' })}
        />
      }
      centerContent={projects.map((project, key) => (
        <ProjectCard
          {...project}
          key={key}
          className={
            projects.length === 1
              ? 'col col--12'
              : projects.length > 2
              ? 'col col--4'
              : 'col col--6'
          }
          style={{ marginTop: '20px' }}
        />
      ))}
      bottomContent={<img src="/img/wave.svg" className={styles.wave} />}
    />
  );
};

export default LargeScreenProject;
