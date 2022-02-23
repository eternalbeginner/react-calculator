import Button from '@components/Button';
import operands from '@constants/operands';

function Operand({ value }) {
  return <Button>{operands[value.toLowerCase()]}</Button>;
}

export default Operand;
