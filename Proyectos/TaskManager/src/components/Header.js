import { Flex, HStack, VStack, Text } from '@chakra-ui/layout';
import React from 'react';
import moment from 'moment';

const Header = () => {
  return (
    <Flex w="24rem" justifyContent="space-around" mx="auto" alignItems="center">
      <HStack>
        <Text>{moment().format('d')}</Text>
        <VStack>
          <Text>{moment().format('MMM')} </Text>
          <Text>{moment().format('YYYY')} </Text>
        </VStack>
      </HStack>
      <Text>{moment().format('dddd')} </Text>
    </Flex>
  );
};

export default Header;
