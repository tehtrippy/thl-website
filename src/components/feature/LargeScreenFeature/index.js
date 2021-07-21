import React from 'react';
import clsx from 'clsx';
import { WindowCard } from '../../cards';
import { translate } from '@docusaurus/Translate';
import { HighlightHeader, Description } from '../../typography';
import styles from './styles.module.css';

const LargeScreenFeature = ({ style, className }) => {
  return (
    <div className={className} style={style}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.imgSection}>
          <img src="/img/tonghualabs_feature.svg" className={styles.image} />
        </div>
        <div className={styles.textSection}>
          <div>
            <HighlightHeader text={translate({ message: 'feature.title' })} />
            <Description
              text={translate({ message: 'feature.description' })}
              style={{ marginTop: '16px' }}
            />
          </div>
          <WindowCard
            textContent={
              <Description
                className={styles.caption}
                text={`"${translate({ message: 'feature.caption' })}"`}
              />
            }
            style={{ marginTop: '60px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default LargeScreenFeature;
