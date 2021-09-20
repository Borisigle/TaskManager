import React from 'react';
import { ChakraProvider, Button } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Header from './components/Header';
import myTheme from './theme';

function App() {
  return (
    <ChakraProvider theme={myTheme}>
      <Header />
      <Button>Add task</Button>
    </ChakraProvider>
  );
}

export default App;
