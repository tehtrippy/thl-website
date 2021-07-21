import React from 'react';
import { translate } from '@docusaurus/Translate';
import { SwipeCard } from '../../cards';
import { HighlightHeader } from '../../typography';
import styles from './styles.module.css';

const Labs = ({ labs, content }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <HighlightHeader
          centered={true}
          text={translate({ message: 'our.labs.title' })}
        />
      </div>
      {content}
      <div className={styles.cardSection}>
        <SwipeCard labs={labs} className={styles.swipeCard} />
      </div>
    </div>
  );
};

export default Labs;
