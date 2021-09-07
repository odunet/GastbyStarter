/** @jsx jsx */
import * as containerStyles from './Layouts.module.css';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';
import { Helmet } from 'react-helmet';
import { graphql } from "gatsby"

// Layout wrapper componenet
const Layouts = ({ children }) => {
  return (
    <div className={`container ${containerStyles['genericDiv']}`}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Gastby Starter</title>
        <link
          rel='canonical'
          href='https://hardcore-goldberg-832256.netlify.app/'
        />
        <meta name='description' content='Gastby Starter' />
      </Helmet>
      {children}
      <Footer />
    </div>
  );
};

// Footer wrapper componenet
const Footer = () => {
  return (
    <main
      css={css`
        font-style: italic;
        &:hover {
          cursor: pointer;
        }
      `}
    >
      <StyledNav color='green'>
        <footer className={`footer ${containerStyles['footer']}`}>
          &copy; Copyright 2021
        </footer>
      </StyledNav>
    </main>
  );
};

// Emotion styled component
const Starter = styled.div`
  font-style: italic;
`;

// Emotion styled component
const StyledNav = styled(Starter)`
  text-decoration: underline;
  color: ${(props) => (props.color ? props.color : 'yellow')};
`;

export const imageQuery = graphql`
  fragment LayoutFragment on File {
      childImageSharp {
        gatsbyImageData(
          width: 500
          placeholder: BLURRED
          formats: PNG
          layout: CONSTRAINED
        )
        internal {
          contentDigest
        }
      }
  }
`;

export default Layouts;
