import React from 'react';
import { translate } from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import AboutScreen from '../../components/screens/About';

export default function About() {
  return (
    <Layout
      title="About"
      description={translate({ message: 'about.opengraph.description' })}
    >
      <AboutScreen />
    </Layout>
  );
}
