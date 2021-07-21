import React from 'react';
import ResponsiveScreen from '../../media-query/ResponsiveScreen';
import { LargeScreenAbout, SmallScreenAbout } from '../../about';

const AboutScreen = () => {
  return (
    <ResponsiveScreen
      largeContent={<LargeScreenAbout />}
      smallContent={<SmallScreenAbout />}
    />
  );
};

export default AboutScreen;
