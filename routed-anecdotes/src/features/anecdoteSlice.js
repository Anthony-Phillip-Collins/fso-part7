import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    content: 'If it hurts, do it more often',
    author: 'Jez Humble',
    info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
    votes: 0,
    id: 1,
  },
  {
    content: 'Premature optimization is the root of all evil',
    author: 'Donald Knuth',
    info: 'http://wiki.c2.com/?PrematureOptimization',
    votes: 0,
    id: 2,
  },
];

export const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState,
  reducers: {
    addAnecdote: (state, action) => {
      const { content, author, info } = action.payload;
      if (content && author && info) {
        const id = Math.round(Math.random() * 10000);
        state.push({ content, author, info, id, votes: 0 });
      }
    },
  },
});

export const { addAnecdote } = anecdoteSlice.actions;

export default anecdoteSlice.reducer;
