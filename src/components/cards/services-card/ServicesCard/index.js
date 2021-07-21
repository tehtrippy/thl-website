import clsx from 'clsx';
import React from 'react';
import { SubHeader } from '../../../typography';
import { GhostButton } from '../../../buttons';
import styles from './styles.module.css';

const ServicesCard = ({
  title,
  imageContent,
  descriptionContent,
  buttonText,
  to,
  style,
  className,
  textSectionClassName,
}) => {
  return (
    <div
      className={clsx('container', styles.container, className)}
      style={style}
    >
      <div className={clsx(styles.textSection, textSectionClassName)}>
        <SubHeader text={title} className={styles.topic} />
        {descriptionContent}
        <GhostButton text={buttonText} to={to} className={styles.button} />
      </div>
      {imageContent}
    </div>
  );
};

export default ServicesCard;
