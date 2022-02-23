import styled from 'styled-components';

export const StyledCta = styled.div`
  --cta-gap: 5px;
  --cta-size: 60px;

  display: grid;
  width: 100%;
  height: max-content;
  grid-template-columns: repeat(4, var(--cta-size));
  grid-template-rows: repeat(5, var(--cta-size));
  gap: var(--cta-gap);
`;
