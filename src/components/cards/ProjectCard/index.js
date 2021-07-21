import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import { SubHeader, Description } from '../../typography';
import styles from './styles.module.css';

const ProjectCard = ({ image, title, description, to, style, className }) => {
  return (
    <div className={clsx(styles.container, className)} style={style}>
      <img src={image} className={styles.image} />
      <SubHeader text={title} to={to} style={{ marginTop: '24px' }} />
      <Description text={description} />
    </div>
  );
};

export default ProjectCard;
