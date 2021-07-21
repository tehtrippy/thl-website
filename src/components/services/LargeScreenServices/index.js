import React from 'react';
import { translate } from '@docusaurus/Translate';
import { LargeScreenServicesCard } from '../../cards/services-card';
import { HighlightHeader } from '../../typography';
import styles from './styles.module.css';

const LargeScreenServices = ({ services }) => {
  return (
    <div>
      <div className={styles.title}>
        <HighlightHeader
          text={translate({ message: 'services.title' })}
          centered={true}
        />
      </div>
      {services.map((service, key) =>
        key % 2 === 0 ? (
          <LargeScreenServicesCard
            {...service}
            className={styles.evenItem}
            key={key}
          />
        ) : (
          <div className={styles.oddItem} key={key}>
            <LargeScreenServicesCard {...service} />
          </div>
        ),
      )}
    </div>
  );
};

export default LargeScreenServices;
