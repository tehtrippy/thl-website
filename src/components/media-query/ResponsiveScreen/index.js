import React from 'react';
import { useIsSmallScreen, useIsLargeScreen } from '../../../hooks/media-query';

const ResponsiveScreen = ({ largeContent, smallContent }) => {
  const isSmallScreen = useIsSmallScreen();
  const isLargeScreen = useIsLargeScreen();
  return (
    <React.Fragment>
      {isSmallScreen && (smallContent || largeContent)}
      {isLargeScreen && (largeContent || smallContent)}
    </React.Fragment>
  );
};

export default ResponsiveScreen;
