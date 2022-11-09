import { useSelector } from 'react-redux';
import { BlogSortTypes } from '../app/reducers/blogSortSlice';

export default function useBlogs() {
  const blogs = useSelector((state) => {
    switch (state.blogSortType) {
      case BlogSortTypes.LIKES_DESCENDING:
        return [...state.blogs].sort((a, b) => b.likes - a.likes);
      default:
        return state.blogs;
    }
  });

  return blogs;
}
