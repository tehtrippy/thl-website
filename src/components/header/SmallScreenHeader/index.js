import clsx from 'clsx';
import React from 'react';
import { HighlightHeader } from '../../typography';
import styles from './styles.module.css';

const SmallScreenHeader = ({ style, className, text }) => {
  return (
    <div className={clsx(styles.container, className)} style={style}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1566 498"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.3815e-05 437.978L0 0.000244141L1566 -3.99183e-05L1566 497.97C1402.52 428.499 1003.57 309.671 715.648 390.123C427.725 470.575 118.581 455.548 7.3815e-05 437.978Z"
          fill="#262835"
        />
      </svg>
      <div className={styles.textContainer}>
        <HighlightHeader text={text} centered={true} className={styles.text} />
      </div>
    </div>
  );
};

export default SmallScreenHeader;
