import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [operation, setOperation] = useState([]);

  function changeInput(event) {
    setInput((prev) => prev + event.target.value);
  }

  function deleteInput() {
    setInput((prev) => prev.slice(0, prev.length - 1));
  }

  function resetInput() {
    setInput('');
  }

  function executeOperation() {
    const [numOne, operand] = operation;
    const numTwo = input;

    let result = 0;

    if (operand === 'mod') {
      result = numOne % numTwo;
    }

    setOperation([]);
    setInput(result);
  }

  function pushOperation(event) {
    setOperation((prev) => [...prev, input, event.target.value]);
    setInput('');
  }

  return (
    <div className="calc">
      <section className="calc-display">
        <span className="calc-display-history" />
        <span className="calc-display-input">{input}</span>
      </section>
      <section className="calc-cta">
        <button type="button" onClick={resetInput}>
          AC
        </button>
        <button type="button" onClick={deleteInput}>
          DEL
        </button>
        <button type="button" value="mod" onClick={pushOperation}>
          %
        </button>
        <button type="button" value="7" onClick={changeInput}>
          7
        </button>
        <button type="button" value="8" onClick={changeInput}>
          8
        </button>
        <button type="button" value="9" onClick={changeInput}>
          9
        </button>
        <button type="button">/</button>
        <button type="button" value="4" onClick={changeInput}>
          4
        </button>
        <button type="button" value="5" onClick={changeInput}>
          5
        </button>
        <button type="button" value="6" onClick={changeInput}>
          6
        </button>
        <button type="button">*</button>
        <button type="button" value="1" onClick={changeInput}>
          1
        </button>
        <button type="button" value="2" onClick={changeInput}>
          2
        </button>
        <button type="button" value="3" onClick={changeInput}>
          3
        </button>
        <button type="button">-</button>
        <button type="button" value="0" onClick={changeInput}>
          0
        </button>
        <button type="button" onClick={executeOperation}>
          =
        </button>
        <button type="button">+</button>
      </section>
    </div>
  );
}

export default App;
