import React from 'react';
import { translate } from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import ServicesScreen from '../../components/screens/Services';

export default function Services() {
  return (
    <Layout
      title="Services"
      description={translate({ message: 'services.opengraph.description' })}
    >
      <ServicesScreen />
    </Layout>
  );
}
