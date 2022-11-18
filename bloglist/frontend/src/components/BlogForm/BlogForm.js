import { forwardRef, useImperativeHandle, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

const BlogForm = forwardRef(({ create }, ref) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const clearFields = () => {
    setTitle('');
    setAuthor('');
    setUrl('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    create({ title, author, url });
  };

  useImperativeHandle(ref, () => ({
    clearFields,
  }));

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
      data-test="blog-form"
    >
      <Form.Label>
        Title
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
        />
      </Form.Label>
      <Form.Label>
        Author
        <Form.Control
          type="text"
          name="author"
          value={author}
          onChange={({ target: { value } }) => setAuthor(value)}
        />
      </Form.Label>
      <Form.Label>
        URL
        <Form.Control
          type="text"
          name="url"
          value={url}
          onChange={({ target: { value } }) => setUrl(value)}
        />
      </Form.Label>
      <Button type="submit" className="mb-2">
        create
      </Button>
    </Form>
  );
});

BlogForm.propTypes = {
  create: PropTypes.func.isRequired,
};

BlogForm.displayName = 'BlogForm';

export default BlogForm;
