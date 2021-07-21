import React from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import { Header, SubHeader } from '../../typography';
import StarEffect from '../../effect/StarEffect';
import styles from './styles.module.css';

const SmallScreenLanding = ({ style, className }) => {
  return (
    <div className={clsx(className, styles.container)} style={style}>
      <StarEffect />
      <div className={styles.imgSection}>
        <img src="img/moon_half.svg" className={styles.moonHalf} />
      </div>
      <div className={clsx('container', styles.introduce)}>
        <Header
          text={translate({ message: 'home.introduction.title' })}
          className={styles.headerText}
        />
        <SubHeader
          colorful={true}
          className={styles.description}
          text={translate({ message: 'home.introduction.description' })}
        />
      </div>
      <img src="img/rocket.svg" className={styles.rocket} />
      <img src="img/jupiter.svg" className={styles.jupiter} />
      <img src="img/circle_grey.svg" className={styles.circle_grey} />
    </div>
  );
};

export default SmallScreenLanding;
