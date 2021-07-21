import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const Project = ({
  topContent,
  centerContent,
  bottomContent,
  style,
  className,
}) => {
  return (
    <div className={clsx(styles.container, className)} style={style}>
      {topContent}
      <div className={clsx('row container', styles.projectsCard)}>
        {centerContent}
      </div>
      {bottomContent}
    </div>
  );
};

export default Project;
