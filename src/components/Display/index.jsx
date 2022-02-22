import Current from './Current';
import Saved from './Saved';

function Display() {
	return (
		<div className="calc__display">
			<Saved num="1000" operand="*" />
			<Current num="100" />
		</div>
	);
}

export default Display;
