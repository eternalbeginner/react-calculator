export const actions = {
  OPERAND_UPDATE: 'operand-update',
};

function operandReducer(state, { type, payload = {} }) {
  const { operand } = state;

  switch (type) {
    default:
      return state;
  }
}

export default operandReducer;
