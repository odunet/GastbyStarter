import React from 'react';
import { graphql } from 'gatsby';

const Index = ({ data }) => {
  const { file } = data;
  console.log(file.publicURL);
  return (
    <div>
      <h1>This is the homepage.</h1>
      <img
        src={file.publicURL}
        alt='This is a tree in the forest'
        style={{ maxWidth: 800 }}
      />
    </div>
  );
};

export const pageQuery = graphql`
  query PageQuery {
    file(relativePath: { eq: "relaxing_man.jpg" }) {
      publicURL
    }
  }
`;

export default Index;
