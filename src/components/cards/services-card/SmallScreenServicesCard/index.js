import React from 'react';
import { SubDescription } from '../../../typography';
import ServicesCard from '../ServicesCard';
import styles from './styles.module.css';

const SmallScreenServicesCard = ({ image, description, ...props }) => {
  return (
    <ServicesCard
      imageContent={<img src={image} className={styles.image} />}
      descriptionContent={
        <SubDescription className={styles.description} text={description} />
      }
      style={{ flexDirection: 'column-reverse', ...props.style }}
      {...props}
    />
  );
};

export default SmallScreenServicesCard;
