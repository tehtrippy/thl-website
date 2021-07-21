import React from 'react';
import { translate } from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import ContactUsScreen from '../../components/screens/ContactUs';

export default function Contact() {
  return (
    <Layout
      title="Contact Us"
      description={translate({ message: 'contactus.opengraph.description' })}
    >
      <ContactUsScreen />
    </Layout>
  );
}
