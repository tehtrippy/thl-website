import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { SubDescription } from '../../typography';
import styles from './styles.module.css';

const Button = ({ text, to, style, className }) => {
  return (
    <div className={clsx(styles.button, className)} style={style}>
      <Link to={to}>
        <SubDescription text={text} />
      </Link>
    </div>
  );
};

export default Button;
