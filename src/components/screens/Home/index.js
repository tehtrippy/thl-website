import React from 'react';
import { translate } from '@docusaurus/Translate';
import { LargeScreenLanding, SmallScreenLanding } from '../../landing';
import { LargeScreenFeature, SmallScreenFeature } from '../../feature';
import { LargeScreenLabs, SmallScreenLabs } from '../../labs';
import ResponsiveScreen from '../../media-query/ResponsiveScreen';
import styles from './styles.module.css';

const labs = [
  {
    title: translate({ message: 'labs.first.title' }),
    description: translate({ message: 'labs.first.description' }),
    to: 'media-lab',
    image: '/img/labs/media.svg',
  },
  {
    title: translate({ message: 'labs.second.title' }),
    description: translate({ message: 'labs.second.description' }),
    to: 'web3-lab',
    image: '/img/labs/web3.svg',
  },
];

const HomeScreen = () => {
  return (
    <React.Fragment>
      <ResponsiveScreen
        smallContent={
          <React.Fragment>
            <SmallScreenLanding className={styles.landing} />
            <SmallScreenFeature className={styles.feature} />
            <SmallScreenLabs labs={labs} />
          </React.Fragment>
        }
        largeContent={
          <React.Fragment>
            <LargeScreenLanding className={styles.landing} />
            <LargeScreenFeature className={styles.feature} />
            <LargeScreenLabs labs={labs} />
          </React.Fragment>
        }
      />
    </React.Fragment>
  );
};
export default HomeScreen;
