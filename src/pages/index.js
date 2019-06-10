import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Counter from '../components/counter';

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <Counter />
    <Link to='/page-2/'>Go to page 2</Link>
  </Layout>
);

export default IndexPage;
