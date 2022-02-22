import Num from '@components/Cta/Num';
import Operand from '@components/Cta/Operand';
import Operation from '@components/Cta/Operation';

function Cta({ ...props }) {
  return <div className="calc__cta">{props.children}</div>;
}

Cta.Num = Num;
Cta.Operand = Operand;
Cta.Operation = Operation;

export default Cta;
