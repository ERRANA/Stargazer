import { createGlobalStyle } from "styled-components"
import { ThemeType } from "../interfaces/theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    font-size: 16px;
  }
  `;
