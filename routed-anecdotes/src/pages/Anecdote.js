const Anecdote = ({ anecdote }) => {
  if (anecdote) {
    const { content, author, info, votes } = anecdote;
    return (
      <>
        <h2>
          {content} by {author}
        </h2>
        <p>has {votes} votes</p>
        <p>
          for more info see <a href={info}>{info}</a>
        </p>
      </>
    );
  }

  return <h2>The anecdote you're looking for doesn't exist!</h2>;
};

export default Anecdote;
