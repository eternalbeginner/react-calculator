import { StyledButton } from '@components/Button/index.style';

function Button({ ...props }) {
  return (
    <StyledButton type="button" {...props}>
      {props.children}
    </StyledButton>
  );
}

export default Button;
