import styled from "styled-components";

export const TextInput = styled.input`
  border-radius: 15px;
  border: 1.5px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  margin: 0 1em;
  padding: 0.25em 1em;
  width: 30em;
  box-sizing: border-box;
  line-height: 2em;
`;
