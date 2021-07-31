import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layouts from '../components/Layouts';

const Markdown = ({ data }) => {
  const { markdownRemark } = data;
  const image =
    markdownRemark.frontmatter.featuredImage.childImageSharp.gatsbyImageData;
  console.log(image);

  return (
    <Layouts>
      <h1>Markdown Template : {markdownRemark.frontmatter.title}</h1>

      <p>===================================</p>
      <GatsbyImage
        loading='eager'
        image={image}
        alt='My sample dynamic import name'
      />
      <p>===================================</p>

      <p>{markdownRemark.frontmatter.description}</p>
      {markdownRemark.frontmatter.slug && <p>Here Boss!!</p>}
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layouts>
  );
};

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        slug
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 500
              placeholder: BLURRED
              formats: PNG
              layout: FULL_WIDTH
              tracedSVGOptions: { color: "coral" }
            )
          }
        }
      }
    }
  }
`;

export default Markdown;
