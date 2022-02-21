import { useReducer } from 'react';

import stateReducer, { actions, initial } from '@reducer';
import { operands } from '@utils/calculation';

function App() {
  const [state, dispatch] = useReducer(stateReducer, initial);

  function alterOperand(value) {
    dispatch({ type: actions.OPERAND_ALTER, payload: { operand: value } });
  }

  function execute() {
    dispatch({ type: actions.EXECUTE });
  }

  function flushInput() {
    dispatch({ type: actions.INPUT_FLUSH });
  }

  function popInput() {
    dispatch({ type: actions.INPUT_POP });
  }

  function pushInput(value) {
    dispatch({ type: actions.INPUT_PUSH, payload: { input: value } });
  }

  return (
    <div className="calc">
      <section className="calc-display">
        <span className="calc-display-operation">
          {`${state.input.right || 0} ${operands[state.operand] ?? ''}`}
        </span>
        <span className="calc-display-input">{state.input.left || 0}</span>
      </section>
      <section className="calc-cta">
        <button type="button" onClick={() => flushInput()}>
          AC
        </button>
        <button type="button" onClick={() => popInput()}>
          DEL
        </button>
        <button type="button" onClick={() => alterOperand('mod')}>
          %
        </button>
        <button type="button" onClick={() => pushInput(7)}>
          7
        </button>
        <button type="button" onClick={() => pushInput(8)}>
          8
        </button>
        <button type="button" onClick={() => pushInput(9)}>
          9
        </button>
        <button type="button" onClick={() => alterOperand('div')}>
          /
        </button>
        <button type="button" onClick={() => pushInput(4)}>
          4
        </button>
        <button type="button" onClick={() => pushInput(5)}>
          5
        </button>
        <button type="button" onClick={() => pushInput(6)}>
          6
        </button>
        <button type="button" onClick={() => alterOperand('mul')}>
          *
        </button>
        <button type="button" onClick={() => pushInput(1)}>
          1
        </button>
        <button type="button" onClick={() => pushInput(2)}>
          2
        </button>
        <button type="button" onClick={() => pushInput(3)}>
          3
        </button>
        <button type="button" onClick={() => alterOperand('sub')}>
          -
        </button>
        <button type="button" onClick={() => pushInput(0)}>
          0
        </button>
        <button type="button" onClick={() => execute()}>
          =
        </button>
        <button type="button" onClick={() => alterOperand('add')}>
          +
        </button>
      </section>
    </div>
  );
}

export default App;
