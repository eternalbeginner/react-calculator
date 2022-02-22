import operands from '@constants/operands';
import Button from '@components/Button';

function Operand({ value }) {
  return <Button className={['cta__operand']}>{operands[value.toLowerCase()]}</Button>;
}

export default Operand;
