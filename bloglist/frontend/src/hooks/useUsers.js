import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function useUsers() {
  const users = useSelector((state) => {
    const reducer = (userArray, blog) => {
      let usr = userArray.find(({ id }) => blog.user.id === id);

      if (!usr) {
        usr = { ...blog.user, blogs: [] };
        userArray.push(usr);
      }

      usr.blogs.push(blog);

      return userArray;
    };

    return state.blogs.reduce(reducer, []);
  });

  const st = useSelector((state) => state);
  useEffect(() => {
    console.log(st);
  }, [users]);

  return users;
}
