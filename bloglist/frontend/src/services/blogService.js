import axios from 'axios';
import loginService from './loginService';

const baseUrl = '/api/blogs';

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${loginService.getUser().token}`,
  },
});

const getAll = async () => {
  const { data } = await axios.get(baseUrl);
  return data;
};

const getOne = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}`);
  return data;
};

const create = async (blog) => {
  const { data } = await axios.post(baseUrl, blog, authConfig());
  return data;
};

const like = async (id) => {
  const blog = await getOne(id);
  blog.likes += 1;
  const { data } = await axios.put(`${baseUrl}/${blog.id}`, blog, authConfig());
  return data;
};

const update = async (blog) => {
  const { data } = await axios.put(`${baseUrl}/${blog.id}`, blog, authConfig());
  return data;
};

const remove = async (id) => {
  const { data } = await axios.delete(`${baseUrl}/${id}`, authConfig());
  return data;
};

const blogService = { getAll, getOne, create, like, update, remove };

export default blogService;
