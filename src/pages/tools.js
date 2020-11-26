import React from "react";
import Layout from "../components/layout";

/*
TODO:
import SEO from "../components/seo"
 */

const ToolsPage = () => (
  <Layout>
    <div>
      <h1>Tools</h1>
      <p>
        The Reconstrue Project consists of multiple software tools useful for neuroscientific research.
      </p>
      <ul>
        <li><a href="https://github.com/reconstrue/cuboids">Cuboids</a>: A cloud-native database for volumetric data, based upon <a href="https://bossdb.org/">bossDB</a></li>
        <li><a href="https://github.com/reconstrue/cubee">Cubee</a>: a web browser based client for Cuboids, based upon <a href="https://github.com/google/neuroglancer">Neuroglancer</a></li>
        <li><a href="https://github.com/reconstrue/brightfield">Brigthfield</a>: 3D CNN recognition of biocytin stained neurons in microscopy image stacks</li>
        <li></li>
         
      </ul>

    </div>
    </Layout>
);


export default ToolsPage;
