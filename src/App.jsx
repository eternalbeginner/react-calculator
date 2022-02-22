function App() {
	return (
		<section className="calc">
			<div className="calc__display">
				<div className="display__saved">
					<span className="saved__num">1000</span>
					<span className="saved__operand">*</span>
				</div>
				<div className="display_current">100</div>
			</div>
			<div className="calc__cta">
				<button className="cta__button">AC</button>
				<button className="cta__button">DEL</button>
				<button className="cta__button">%</button>
				<button className="cta__button">7</button>
				<button className="cta__button">8</button>
				<button className="cta__button">9</button>
				<button className="cta__button">/</button>
				<button className="cta__button">4</button>
				<button className="cta__button">5</button>
				<button className="cta__button">6</button>
				<button className="cta__button">*</button>
				<button className="cta__button">1</button>
				<button className="cta__button">2</button>
				<button className="cta__button">3</button>
				<button className="cta__button">-</button>
				<button className="cta__button">0</button>
				<button className="cta__button">=</button>
				<button className="cta__button">+</button>
			</div>
		</section>
	);
}

export default App;
