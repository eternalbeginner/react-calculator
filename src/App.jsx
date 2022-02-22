import Cta from './components/Cta';
import Display from './components/Display';

function App() {
	return (
		<section className="calc">
			<Display />
			<Cta>
				<Cta.Operation value="clr" />
				<Cta.Operation value="del" />
				<Cta.Operand value="mod" />
				<Cta.Num value="7" />
				<Cta.Num value="8" />
				<Cta.Num value="9" />
				<Cta.Operand value="div" />
				<Cta.Num value="4" />
				<Cta.Num value="5" />
				<Cta.Num value="6" />
				<Cta.Operand value="mul" />
				<Cta.Num value="1" />
				<Cta.Num value="2" />
				<Cta.Num value="3" />
				<Cta.Operand value="sub" />
				<Cta.Num value="0" />
				<Cta.Operation value="equ" />
				<Cta.Operand value="add" />
			</Cta>
		</section>
	);
}

export default App;
