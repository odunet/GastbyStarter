import React from 'react';
import * as containerStyles from './Layouts.module.css';

const Layouts = ({ children }) => {
  return (
    <div className={`container ${containerStyles['genericDiv']}`}>
      {children}
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className={`footer ${containerStyles['footer']}`}>
      &copy; Copyright 2021
    </footer>
  );
};

export default Layouts;
