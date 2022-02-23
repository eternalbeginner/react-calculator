export const actions = {
  NUM_INSERT: 'num-insert',
};

function numReducer(state, { type, payload = {} }) {
  const { num } = state;

  switch (type) {
    default:
      return state;
  }
}

export default numReducer;
