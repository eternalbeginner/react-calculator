import Current from '@components/Display/Current';
import Saved from '@components/Display/Saved';

function Display() {
  return (
    <div className="calc__display">
      <Saved num="1000" operand="*" />
      <Current num="100" />
    </div>
  );
}

export default Display;
