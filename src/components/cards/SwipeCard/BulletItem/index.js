import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const BulletItem = ({ className, active, onClick }) => {
  return (
    <div
      className={clsx(styles.container, className, {
        [styles.containerActive]: active,
      })}
      onClick={onClick}
    />
  );
};

export default BulletItem;
