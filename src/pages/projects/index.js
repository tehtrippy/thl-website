import React from 'react';
import { translate } from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import ProjectsScreen from '../../components/screens/Projects';

export default function Projects() {
  return (
    <Layout
      title="Projects"
      description={translate({ message: 'projects.opengraph.description' })}
    >
      <ProjectsScreen />
    </Layout>
  );
}
