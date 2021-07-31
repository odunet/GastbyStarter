/** @jsx jsx */
import React from 'react';
import * as containerStyles from './Layouts.module.css';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';

// Layout wrapper componenet
const Layouts = ({ children }) => {
  return (
    <div className={`container ${containerStyles['genericDiv']}`}>
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
const StyledNav = styled.div`
  text-decoration: underline;
  color: ${(props) => (props.color ? props.color : 'yellow')};
`;

export default Layouts;
