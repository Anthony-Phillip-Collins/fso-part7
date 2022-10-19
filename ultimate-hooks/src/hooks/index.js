import axios from 'axios';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  const getAll = useCallback(async () => {
    try {
      const { data } = await axios.get(baseUrl);
      setResources(data);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }, [baseUrl]);

  const create = async (resource) => {
    try {
      const { data } = await axios.post(baseUrl, resource);
      setResources([...resources, data]);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getAll();
  }, [getAll]);

  const service = {
    create,
  };

  return [resources, service];
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
