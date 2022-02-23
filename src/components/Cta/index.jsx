import Num from '@components/Cta/Num';
import Operand from '@components/Cta/Operand';
import Operator from '@components/Cta/Operator';

import { StyledCta } from '@components/Cta/index.style';

function Cta({ ...props }) {
  return <StyledCta>{props.children}</StyledCta>;
}

Cta.Num = Num;
Cta.Operand = Operand;
Cta.Operator = Operator;

export default Cta;
