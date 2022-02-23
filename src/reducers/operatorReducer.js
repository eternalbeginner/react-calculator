export const actions = {
  OPERATOR_CLEAR: 'operator-clear',
  OPERATOR_DELETE: 'operator-delete',
  OPERATOR_EQUAL: 'operator-equal',
};

function operatorReducer(state, { type, payload = {} }) {
  switch (type) {
    default:
      return state;
  }
}

export default operatorReducer;
