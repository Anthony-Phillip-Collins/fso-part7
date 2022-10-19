import { useField } from '../hooks';

const CreateForm = (props) => {
  const { reset: resetContent, ...content } = useField('content');
  const { reset: resetAuthor, ...author } = useField('author');
  const { reset: resetInfo, ...info } = useField('info');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.nativeEvent.submitter.name === 'clear') {
      resetContent();
      resetAuthor();
      resetInfo();
      return;
    }

    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        content
        <input {...content} />
      </div>
      <div>
        author
        <input {...author} />
      </div>
      <div>
        url for more info
        <input {...info} />
      </div>
      <button type='submit' name='create'>
        create
      </button>
      <button type='submit' name='clear'>
        clear
      </button>
    </form>
  );
};

export default CreateForm;
