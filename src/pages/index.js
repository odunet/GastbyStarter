import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layouts from '../components/Layouts';
import useApi from '../hook/use-api';
import staticQuery from '../staticQuery';

const Index = ({ data }) => {
  //fROM Gatsby GraphQL
  const { file } = data;

  //From Rest API
  const [data_] = useApi();

  //From Gatsby Static Query API
  const relativepath = staticQuery()
  console.log(relativepath);

  //Mimic Scrambled From Server [Uses ROT-13]
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

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
      {/* Show data from REST endpoint */}
      <br />
      <p>===========================================</p>
      <p>{JSON.stringify(data_)}</p>
      <br />
      <address>
        Visit us at: Cabramatta, Box 564, Disneyland<br />
        USA
      </address>

      //Using Obfuscate package
      <br />
    </Layouts>
  );
};

export const pageQuery = graphql`
      query PageQuery {
        file(relativePath: {eq: "relaxing_man.jpg" }) {
        publicURL
      }
  }
      `;

export default Index;
