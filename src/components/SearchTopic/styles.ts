import styled from "styled-components";
import { Button } from "../Button";
import { TextInput } from "../TextInput";

export const InputContainer = styled.div`
  background: transparent;
  padding: 0.25em 1em;
  text-align: center;
  margin: 0 8% 0 8%;
`;

export const SearchInput = styled(TextInput)`
  width: 100%;
  max-width: 600px;
  font-size: 1.25rem;
`;

export const SearchButton = styled(Button)`
  margin-top: 20px;
  font-size: 1.25rem;
`;
