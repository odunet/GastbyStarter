import React from 'react';
import { graphql } from 'gatsby';
import * as containerStyles from './Generic.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';

const Markdown = ({ data }) => {
  const { markdownRemark } = data;
  const image =
    markdownRemark.frontmatter.featuredImage.childImageSharp.gatsbyImageData;
  console.log(image);

  return (
    <div className={`container ${containerStyles['genericDiv']}`}>
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
    </div>
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
