import Num from './Num';
import Operand from './Operand';
import Operation from './Operation';

function Cta({ ...props }) {
  return <div className="calc__cta">{props.children}</div>;
}

Cta.Num = Num;
Cta.Operand = Operand;
Cta.Operation = Operation;

export default Cta;
