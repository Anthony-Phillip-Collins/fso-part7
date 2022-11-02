import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../app/reducers/blogSlice';
import useNotification from '../../hooks/useNotification';
import Toggleable from '../Toggleable';
import BlogForm from './BlogForm';

export default function BlogFormContainer() {
  const toggleRef = useRef();
  const blogFormRef = useRef();
  const dispatch = useDispatch();
  const notify = useNotification();

  const onBlogCreate = async ({ title, author, url }) => {
    const blog = { title, author, url };
    try {
      const data = await dispatch(createBlog(blog)).unwrap();
      notify({
        text: `The blog named '${data.title}' has been added.`,
      });

      blogFormRef.current.clearFields();
      toggleRef.current.toggle();
    } catch (error) {
      notify(error);
    }
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <Toggleable
        buttonLabelShow="create"
        buttonLabelHide="cancel"
        ref={toggleRef}
      >
        <BlogForm create={onBlogCreate} ref={blogFormRef} />
      </Toggleable>
    </div>
  );
}
