import React from 'react';
import clsx from 'clsx';
import BodyText from '../BodyText';
import styles from './styles.module.css';

const LargeScreenAbout = ({ style, className }) => {
  return (
    <div className={clsx(styles.container, className)} style={style}>
      <div className={clsx('container', styles.textWrapper)}>
        <BodyText />
      </div>
      <div className={styles.nodeWrapper}>
        <img src="img/about/node.svg" className={styles.node} />
      </div>
    </div>
  );
};

export default LargeScreenAbout;
