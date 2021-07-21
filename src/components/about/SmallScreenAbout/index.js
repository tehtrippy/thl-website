import React from 'react';
import clsx from 'clsx';
import BodyText from '../BodyText';
import styles from './styles.module.css';

const SmallScreenAbout = () => {
  return (
    <div className={clsx('container', styles.container)}>
      <img src="img/about/node.svg" className={styles.nodeImage} />
      <BodyText className={styles.bodyText} />
    </div>
  );
};

export default SmallScreenAbout;
