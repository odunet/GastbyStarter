import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layouts from '../components/Layouts';

const Markdown = ({ data }) => {
  const { markdownRemark } = data;
  const image =
    markdownRemark.frontmatter.featuredImage.childImageSharp.gatsbyImageData;
  console.log(markdownRemark.fields.slug);

  return (
    <Layouts>
      <Link
        to={
          markdownRemark.fields.slug !== '/second-markdown/'
            ? '/first-markdown/'
            : '/second-markdown/'
        }
      >
        <h2>The slug is: {markdownRemark.fields.slug}</h2>
      </Link>
      <Link
        to={
          markdownRemark.fields.slug === '/first-markdown/'
            ? '/second-markdown/'
            : '/first-markdown/'
        }
      >
        <h2>
          The slug is:{' '}
          {markdownRemark.fields.slug === '/first-markdown/'
            ? '/second-markdown/'
            : '/first-markdown/'}
        </h2>
      </Link>
      <h1>Markdown Template : {markdownRemark.frontmatter.title}</h1>
      <br />
      <p>
        ===={' '}
        <small>
          <b>Note Update: </b>Slug from <b>.md</b> file i.e
          {markdownRemark.frontmatter.slug} no longer used. ===={' '}
        </small>
      </p>
      <br />
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
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
