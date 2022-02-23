import Button from '@components/Button';

function Num({ value, ...props }) {
  return <Button {...props}>{value}</Button>;
}

export default Num;
