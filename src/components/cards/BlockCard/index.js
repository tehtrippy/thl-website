import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const BlockCard = ({ content, style, className }) => {
  return (
    <div className={clsx(styles.block, className)} style={style}>
      {content}
    </div>
  );
};

export default BlockCard;
