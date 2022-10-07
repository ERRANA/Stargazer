import styled from "styled-components";

export const Button = styled.button`
  border-radius: 2em;
  border: 1.5px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  margin: 0 1em;
  padding: 0.25em 1em;
  max-width: 30em;
  box-sizing: border-box;
  line-height: 2em;
  font-weight: 600;
`;