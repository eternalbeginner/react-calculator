import { StyledSaved } from '@components/Display/Saved.style';

function Saved({ num, operand }) {
  return (
    <StyledSaved>
      <span>{num}</span>
      <span>{operand}</span>
    </StyledSaved>
  );
}

export default Saved;
