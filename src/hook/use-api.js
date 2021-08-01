import axios from 'axios';
import { useState, useEffect } from 'react';

const useApi = () => {
  const [data, setData] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/todos/1`;
  useEffect(() => {
    const fetch = async () => {
      let response = await axios({
        url: url,
        method: 'GET',
      });
      console.log(response.data);
      setData((data) => [...data, response.data]);
    };

    fetch();
  }, [url]);

  return [data, setData];
};

export default useApi;
