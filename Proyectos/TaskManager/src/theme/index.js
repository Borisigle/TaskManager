import { extendTheme } from '@chakra-ui/react';

const myTheme = extendTheme({
  styles: {
    global: {
      body: {
        textAlign: 'center',
      },
    },
  },
});

export default myTheme;
