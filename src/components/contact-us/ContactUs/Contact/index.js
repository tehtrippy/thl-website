import React from 'react';
import { translate } from '@docusaurus/Translate';
import { Description, SubDescription } from '../../../typography';
import styles from './styles.module.css';
import clsx from 'clsx';

const Contact = ({ style, className }) => {
  return (
    <div className={clsx(styles.container, className)} style={style}>
      <div>
        <Description
          className={styles.topicText}
          text={translate({ message: 'contact.working.hours.title' })}
        />
        <SubDescription
          text={translate({
            message: 'contact.working.hours.description',
          })}
        />
      </div>
      <div className={styles.addressSection}>
        <Description
          className={styles.topicText}
          text={translate({ message: 'contact.address.title' })}
        />
        <SubDescription
          text={translate({
            message: 'contact.address.description',
          })}
        />
      </div>
      <div className={styles.phoneSection}>
        <img src="/img/contactus/phone.svg" style={{ marginRight: '12px' }} />
        <a href={`tel:${translate({ message: 'contact.phone' })}`}>
          <SubDescription
            text={translate({ message: 'contact.phone' })}
            className={styles.phoneText}
          />
        </a>
      </div>
      <div className={styles.emailSection}>
        <img src="/img/contactus/email.svg" style={{ marginRight: '16px' }} />
        <a href={`mailto:${translate({ message: 'contact.email' })}`}>
          <SubDescription
            text={translate({ message: 'contact.email' })}
            className={styles.emailText}
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
