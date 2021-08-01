import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layouts from '../components/Layouts';

const Index = ({ data }) => {
  const { file } = data;
  return (
    <Layouts>
      <h1 style={{ textAlign: 'center', margin: '3rem 0' }}>
        This is the homepage.
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <img
          src={file.publicURL}
          alt='Resting Man standard HTML'
          style={{ maxWidth: 400 }}
        />
        <StaticImage
          src='../images/relaxing_man.jpg'
          alt='Resting Man - Gastsby Static'
          width={400}
          layout='constrained'
          placeholder='blurred'
        />
      </div>
    </Layouts>
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
