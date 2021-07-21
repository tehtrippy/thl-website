import React from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import { BiggestHeader, SubBiggestHeader } from '../../typography';
import StarEffect from '../../effect/StarEffect';
import styles from './styles.module.css';

const LargeScreenLanding = ({ style, className }) => {
  return (
    <div className={clsx(className, styles.container)} style={style}>
      <StarEffect />
      <div className={clsx('container', styles.introduce)}>
        <BiggestHeader
          className={styles.headerText}
          text={translate({ message: 'home.introduction.title' })}
        />
        <SubBiggestHeader
          colorful={true}
          className={styles.description}
          text={translate({ message: 'home.introduction.description' })}
        />
        <img src="img/rocket.svg" className={styles.rocket} />
        <img src="img/jupiter.svg" className={styles.jupiter} />
        <img src="img/circle_grey.svg" className={styles.circle_grey} />
      </div>
      <div className={styles.imgSection}>
        <img src="img/moon_half.svg" className={styles.moonHalf} />
      </div>
    </div>
  );
};

export default LargeScreenLanding;
