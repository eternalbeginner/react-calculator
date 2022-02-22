import Button from '../Button';

const operands = {
	add: <span>&#43;</span>,
	div: <span>&#247;</span>,
	mod: <span>&#37;</span>,
	mul: <span>&#215;</span>,
	sub: <span>&#8722;</span>,
};

function Operand({ value }) {
	return <Button className={['cta__operand']}>{operands[value.toLowerCase()]}</Button>;
}

export default Operand;
