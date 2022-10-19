import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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

const id = () => Math.round(Math.random() * 10000);

export const addAnecdote = createAsyncThunk(
  'anecdote/addAnecdote',
  async ({ content, author, info }) => {
    return await new Promise((resolve, reject) => {
      if (content && author && info) {
        return resolve({ content, author, info, id: id(), votes: 0 });
      }
      reject(
        new Error('There has been an error! Make sure all fields are filled.')
      );
    });
  }
);

export const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAnecdote.pending, (state, action) => {
        console.log('addAnecdote.pending');
      })
      .addCase(addAnecdote.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(addAnecdote.rejected, (state, action) => {
        console.log('addAnecdote.rejected');
      });
  },
});

export default anecdoteSlice.reducer;
