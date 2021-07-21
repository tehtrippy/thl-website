import React from 'react';
import { translate } from '@docusaurus/Translate';
import { SmallScreenServices, LargeScreenServices } from '../../services';
import ResponsiveScreen from '../../media-query/ResponsiveScreen';

const services = [
  {
    image: 'img/services/investing.svg',
    title: translate({ message: 'services.first.title' }),
    description: translate({ message: 'services.first.description' }),
    buttonText: translate({ message: 'services.first.buttons.title' }),
    to: '/contact',
  },
  {
    image: 'img/services/sponsorships.svg',
    title: translate({ message: 'services.second.title' }),
    description: translate({ message: 'services.second.description' }),
    buttonText: translate({ message: 'services.second.buttons.title' }),
    to: '/contact',
  },
  {
    image: 'img/services/collaboration.svg',
    title: translate({ message: 'services.third.title' }),
    description: translate({ message: 'services.third.description' }),
    buttonText: translate({ message: 'services.third.buttons.title' }),
    to: '/contact',
  },
  {
    image: 'img/services/advertisment.svg',
    title: translate({ message: 'services.fourth.title' }),
    description: translate({ message: 'services.fourth.description' }),
    buttonText: translate({ message: 'services.fourth.buttons.title' }),
    to: '/contact',
  },
];

const ServicesScreen = () => {
  return (
    <ResponsiveScreen
      largeContent={<LargeScreenServices services={services} />}
      smallContent={<SmallScreenServices services={services} />}
    />
  );
};

export default ServicesScreen;
