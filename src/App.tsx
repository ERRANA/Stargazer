import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { BaseClient } from './Wrapper/ClientWrapper';
import './App.css';
import Header from './components/Header';
import SearchTopic from './components/SearchTopic';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globals";
import { lightTheme, darkTheme } from "./styles/theme"

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ApolloProvider client={BaseClient()}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header themeToggler={themeToggler} />
        <SearchTopic />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
