import React from 'react';
import { translate } from '@docusaurus/Translate';
import { SmallScreenServicesCard } from '../../cards/services-card';
import SmallScreenHeader from '../../header/SmallScreenHeader';
import styles from './styles.module.css';

const SmallScreenServices = ({ services }) => {
  return (
    <div>
      <SmallScreenHeader text={translate({ message: 'services.title' })} />
      {services.map((service, key) => (
        <SmallScreenServicesCard
          {...service}
          key={key}
          className={styles.serviceCard}
          textSectionClassName={styles.serviceText}
        />
      ))}
    </div>
  );
};

export default SmallScreenServices;
