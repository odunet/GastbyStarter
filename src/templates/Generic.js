import { StaticImage } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import React from 'react';
import Layouts from '../components/Layouts';

const Generic = ({ pageContext, data }) => {
  const image = getImage(data.file);
  console.log(image);
  return (
    <Layouts>
      <h1>Generic Template : {pageContext.title}</h1>
      <p>{pageContext.description}</p>
      <StaticImage
        src='../images/carBack.jpg'
        alt='Beautiful car back picture'
        width={500}
        layout='fixed'
        placeholder='blurred'
      />
      <p>===================================</p>
      <GatsbyImage image={image} alt='My sample dynamic import name' />
      <h2>I like my Ajibaby</h2>
    </Layouts>
  );
};

export const imageQuery = graphql`
  query ImageQuery {
    file(relativePath: { eq: "carBack.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(
          width: 500
          placeholder: BLURRED
          formats: PNG
          layout: CONSTRAINED
        )
      }
    }
  }
`;
export default Generic;
