function App() {
  return (
    <div className="calc">
      <section className="calc-display">
        <span className="calc-display-history" />
        <span className="calc-display-input" />
      </section>
      <section className="calc-cta">
        <button type="button">AC</button>
        <button type="button">DEL</button>
        <button type="button">%</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button">/</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button">*</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">-</button>
        <button type="button">0</button>
        <button type="button">=</button>
        <button type="button">+</button>
      </section>
    </div>
  );
}

export default App;
