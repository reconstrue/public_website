import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const Brandmark = () => {
  const data = useStaticQuery(graphql`query {
      file(name: { eq: "reconstrue_brandmark" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 50, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
      <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
  )
}

export default Brandmark;
