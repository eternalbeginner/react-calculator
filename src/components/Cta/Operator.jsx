import Button from '@components/Button';
import operators from '@constants/operators';

function Operator({ value, ...props }) {
  return <Button {...props}>{operators[value.toLowerCase()]}</Button>;
}

export default Operator;
