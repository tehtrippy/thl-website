import React from 'react';
import clsx from 'clsx';
import ContactUs from '../ContactUs';
import Contact from '../ContactUs/Contact';
import Map from '../ContactUs/Map';
import { translate } from '@docusaurus/Translate';
import { HighlightHeader, SubHeader, Description } from '../../typography';
import styles from './styles.module.css';

const LargeScreenContactUs = () => {
  return (
    <ContactUs
      className={styles.contactUs}
      headerContent={
        <div className={clsx('container', styles.headerContent)}>
          <HighlightHeader
            text={translate({ message: 'contact.title' })}
            centered={true}
          />
          <div className={styles.description}>
            <SubHeader
              text={translate({ message: 'contact.description.part.one' })}
            />
            <SubHeader
              text={translate({ message: 'contact.description.separator' })}
              className={styles.separator}
            />
            <SubHeader
              text={translate({ message: 'contact.description.part.two' })}
            />
          </div>
          <Description
            text={translate({ message: 'contact.sub.description' })}
          />
        </div>
      }
      contactContent={
        <div className={clsx('container', styles.contactWrapper)}>
          <Contact className={styles.contact} />
          <Map />
        </div>
      }
      bottomContent={<img src="/img/wave.svg" className={styles.wave} />}
    />
  );
};

export default LargeScreenContactUs;
