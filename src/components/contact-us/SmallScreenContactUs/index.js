import React from 'react';
import clsx from 'clsx';
import ContactUs from '../ContactUs';
import Contact from '../ContactUs/Contact';
import Map from '../ContactUs/Map';
import { translate } from '@docusaurus/Translate';
import {
  HighlightHeader,
  HeaderDescription,
  Description,
} from '../../typography';
import styles from './styles.module.css';

const SmallScreenContactUs = () => {
  return (
    <ContactUs
      className={clsx('container', styles.contactUs)}
      headerContent={
        <React.Fragment>
          <HighlightHeader text={translate({ message: 'contact.title' })} />
          <div className={styles.description}>
            <HeaderDescription
              text={translate({ message: 'contact.description.part.one' })}
            />
            <HeaderDescription
              text={translate({ message: 'contact.description.separator' })}
              className={styles.separator}
            />
            <HeaderDescription
              text={translate({ message: 'contact.description.part.two' })}
            />
          </div>
          <Description
            text={translate({ message: 'contact.sub.description' })}
          />
        </React.Fragment>
      }
      contactContent={
        <div>
          <Contact className={styles.contact} />
          <Map className={styles.map} />
        </div>
      }
    />
  );
};

export default SmallScreenContactUs;
