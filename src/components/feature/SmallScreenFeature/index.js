import React from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import { HighlightHeader, Description } from '../../typography';
import { WindowCard } from '../../cards';
import styles from './styles.module.css';

const SmallScreenFeature = ({ style, className }) => {
  return (
    <div
      className={clsx('container', styles.container, className)}
      style={style}
    >
      <img src="/img/tonghualabs_feature.svg" />
      <HighlightHeader
        text={translate({ message: 'feature.title' })}
        className={styles.header}
        centered={true}
      />
      <Description
        text={translate({ message: 'feature.description' })}
        className={styles.description}
      />
      <WindowCard
        style={{ marginTop: '48px' }}
        textContent={
          <Description
            className={styles.caption}
            text={`"${translate({ message: 'feature.caption' })}"`}
          />
        }
      />
    </div>
  );
};

export default SmallScreenFeature;
