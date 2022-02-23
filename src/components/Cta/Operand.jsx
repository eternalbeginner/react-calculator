import Button from '@components/Button';
import operands from '@constants/operands';

function Operand({ value, ...props }) {
  return <Button {...props}>{operands[value.toLowerCase()]}</Button>;
}

export default Operand;
