import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

const Map = ({ style, className }) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7467263934186!2d100.51257971497134!3d13.733778001410704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298d8ed6d0f1d%3A0xa99f19d927848c90!2zODc3IOC4luC4meC4mSDguYDguIjguKPguLTguI3guIHguKPguLjguIcg4LmB4LiC4Lin4LiHIOC4leC4peC4suC4lOC4meC5ieC4reC4oiDguYDguILguJXguKrguLHguKHguJ7guLHguJnguJjguKfguIfguKjguYwg4LiB4Lij4Li44LiH4LmA4LiX4Lie4Lih4Lir4Liy4LiZ4LiE4LijIDEwMTAw!5e0!3m2!1sth!2sth!4v1622727250649!5m2!1sth!2sth"
      className={clsx(styles.maps, className)}
      style={style}
      allowFullScreen
      loading="lazy"
    />
  );
};

export default Map;
