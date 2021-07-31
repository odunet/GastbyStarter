import React from 'react';
import * as containerStyles from './Generic.module.css';

const Generic = ({ pageContext }) => {
  return (
    <div className={`container ${containerStyles['genericDiv']}`}>
      <h1>Generic Template : {pageContext.title}</h1>
      <p>{pageContext.description}</p>
    </div>
  );
};

export default Generic;
