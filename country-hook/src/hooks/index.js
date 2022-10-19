import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`
        );
        setCountry(data[0]);
      } catch (error) {
        setCountry(null);
      }
    };
    fetch();
  }, [name]);

  return country;
};

export const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};
