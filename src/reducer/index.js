import calc from '@utils/calculation';

export const initial = {
  input: { left: '', right: '' },
  operand: '',
};

export const actions = {
  EXECUTE: 'execute',
  INPUT_FLUSH: 'input-flush',
  INPUT_POP: 'input-pop',
  INPUT_PUSH: 'input-push',
  OPERAND_ALTER: 'operand-alter',
};

export default function reducer(state, action) {
  const { type, payload = {} } = action;
  const { input } = state;

  switch (type) {
    case actions.EXECUTE:
      return {
        ...initial,
        input: {
          ...initial.input,
          left: calc(input, state.operand),
        },
      };
    case actions.INPUT_FLUSH:
      return initial;
    case actions.INPUT_POP:
      return {
        ...state,
        input: {
          ...input,
          left: input.left.slice(0, input.left.length - 1),
        },
      };
    case actions.INPUT_PUSH:
      return {
        ...state,
        input: {
          ...input,
          left:
            input.left === '' && payload.input === 0
              ? input.left
              : input.left + payload.input,
        },
      };
    case actions.OPERAND_ALTER:
      return {
        ...state,
        ...payload,
        input: {
          left: '',
          right: input.left,
        },
      };
    default:
      return state;
  }
}
