import Button from '../Button';

const operations = {
	clr: <span>AC</span>,
	del: <span>&#60;</span>,
	equ: <span>&#61;</span>,
};

function Operation({ value }) {
	return <Button className={['cta__operation']}>{operations[value.toLowerCase()]}</Button>;
}

export default Operation;
