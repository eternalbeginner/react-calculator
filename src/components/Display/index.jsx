import Current from '@components/Display/Current';
import Saved from '@components/Display/Saved';

import { StyledDisplay } from '@components/Display/index.style';

function Display() {
  return (
    <StyledDisplay>
      <Saved num="1000" operand="*" />
      <Current num="100000000000000" />
    </StyledDisplay>
  );
}

export default Display;
