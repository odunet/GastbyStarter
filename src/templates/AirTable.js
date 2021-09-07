import React from 'react';
import Layouts from '../components/Layouts';

const AirTable = ({ pageContext }) => {
  return (
    <Layouts>
      <h1>I'm Here</h1>
      <pre>{JSON.stringify(pageContext.data, null, 2)}</pre>
      <p>The Slug is: <span><pre>{JSON.stringify(pageContext.slug, null, 2)}</pre></span></p>
      <img src={pageContext.data.data.Attachments[0].url} alt={pageContext.data.data.Name} width={100} height={100} />
    </Layouts >
  );
};

export default AirTable;
