import React from 'react';
import { graphql } from 'gatsby';
import * as containerStyles from './Generic.module.css';

const Markdown = ({ data }) => {
  const { markdownRemark } = data;
  return (
    <div className={`container ${containerStyles['genericDiv']}`}>
      <h1>Markdown Template : {markdownRemark.frontmatter.title}</h1>
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
      }
    }
  }
`;

export default Markdown;
