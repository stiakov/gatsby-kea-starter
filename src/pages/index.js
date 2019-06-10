import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Counter from '../components/counter';

const IndexPage = () => (
  <Layout>
    <h1>Simple Counter</h1>
    <Counter />
  </Layout>
);

export default IndexPage;
