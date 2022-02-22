function Saved({ num, operand }) {
	return (
		<div className="display__saved">
			<span className="saved__num">{num}</span>
			<span className="saved__operand">{operand}</span>
		</div>
	);
}

export default Saved;
