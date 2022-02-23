export function combineReducer(reducers = []) {
  return function actualReducer(state, action) {
    return reducers.reduce(
      (combined, reducer) => ({
        ...combined,
        ...reducer(combined, action),
      }),
      state,
    );
  };
}
