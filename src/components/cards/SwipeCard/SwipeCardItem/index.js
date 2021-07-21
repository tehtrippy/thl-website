import React from 'react';
import Link from '@docusaurus/Link';
import { SubHeader, SubDescription } from '../../../typography';
import styles from './styles.module.css';
import clsx from 'clsx';

const SwipeCardItem = ({ data, className, active, width, height }) => {
  const { image, title, description, to } = data;
  return (
    <div
      className={clsx(styles.container, className, {
        [styles.container_active]: active,
      })}
      style={{ width, height }}
    >
      <img src={image} className={styles.image} />
      <div>
        <SubHeader text={title} className={styles.title} />
        <SubDescription text={description} className={styles.description} />
      </div>
      <Link to={to}>
        <SubDescription text="More" className={styles.more} />
      </Link>
    </div>
  );
};

export default SwipeCardItem;
