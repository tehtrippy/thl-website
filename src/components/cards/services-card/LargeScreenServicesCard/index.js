import React from 'react';
import { Description } from '../../../typography';
import ServicesCard from '../ServicesCard';
import styles from './styles.module.css';

const LargeScreenServicesCard = ({ image, description, ...props }) => {
  return (
    <ServicesCard
      imageContent={<img src={image} />}
      descriptionContent={
        <Description className={styles.description} text={description} />
      }
      {...props}
    />
  );
};

export default LargeScreenServicesCard;
