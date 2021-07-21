import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const ContactUs = ({
  style,
  className,
  headerContent,
  contactContent,
  bottomContent,
}) => {
  return (
    <div className={clsx(styles.container, className)} style={style}>
      {headerContent}
      {contactContent}
      {bottomContent}
    </div>
  );
};

export default ContactUs;
