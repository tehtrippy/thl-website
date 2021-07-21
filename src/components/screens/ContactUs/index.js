import React from 'react';
import ResponsiveScreen from '../../media-query/ResponsiveScreen';
import { LargeScreenContactUs, SmallScreenContactUs } from '../../contact-us';

const ContactUsScreen = () => {
  return (
    <ResponsiveScreen
      largeContent={<LargeScreenContactUs />}
      smallContent={<SmallScreenContactUs />}
    />
  );
};

export default ContactUsScreen;
