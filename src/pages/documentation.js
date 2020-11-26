import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

/*
TODO:
import SEO from "../components/seo"
 */

const DocumentationPage = () => (
  <Layout>
    <div>
      <h1>Documentation</h1>
      <p>
        The documention on this page is about the project in general, not for specific tools
        The various <Link to="/tools">tools</Link> of the Reconstrue project each has their own documentation which can be found with the code.
      </p>
      <p>
        The Reconstrue project is the effor of a single programmer with almost zero education about biology and neuroscience.
      </p>
      <ul>
        <li></li>
         
      </ul>

      <p>
        https://github.com/reconstrue/fieldnotes
      </p>
      </div>
    </Layout>
);

export default DocumentationPage
