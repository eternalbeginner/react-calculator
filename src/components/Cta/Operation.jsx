import operations from '@constants/operations';
import Button from '@components/Button';

function Operation({ value }) {
  return <Button className={['cta__operation']}>{operations[value.toLowerCase()]}</Button>;
}

export default Operation;
