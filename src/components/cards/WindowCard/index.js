import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

const WindowCard = ({ style, textContent, className }) => {
  return (
    <div className={clsx(styles.windowContainer, className)} style={style}>
      <img
        src="/img/features/window_header.png"
        className={styles.windowImage}
      />
      <div className={styles.captionSpace}>{textContent}</div>
    </div>
  );
};

export default WindowCard;
