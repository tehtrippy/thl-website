import React from 'react';
import { translate } from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import HomeScreen from '../components/screens/Home';

export default function Home() {
  return (
    <Layout description={translate({ message: 'home.opengraph.description' })}>
      <HomeScreen />
    </Layout>
  );
}
