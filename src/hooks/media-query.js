import { useWindowSize } from './useWindowSize';

export const useIsSmallScreen = () => {
  const { windowWidth } = useWindowSize();
  const isSmallScreen = windowWidth <= 768;
  return isSmallScreen;
};

export const useIsLargeScreen = () => {
  const { windowWidth } = useWindowSize();
  const isLargeScreen = windowWidth >= 769;
  return isLargeScreen;
};
