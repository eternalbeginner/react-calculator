import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  grid-column: ${({ colSpan }) => (colSpan ? `span ${colSpan}` : 'auto')};
  background-color: rgb(255, 255, 255);
  border-color: rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  border-style: solid;
  border-width: 1.5px;
  outline: none;
  color: rgba(0, 0, 0, 0.7);
  font-family: consolas;
  font-size: 1rem;
  transition-duration: 200ms;
  transition-property: background-color, border-color, color;
  transition-timing-function: ease-in-out;
  cursor: pointer;

  &:hover {
    border-color: rgba(0, 0, 255, 0.6);
    color: rgba(0, 0, 255, 0.6);
  }
`;
