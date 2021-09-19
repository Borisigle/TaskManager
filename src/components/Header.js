import { Box, Flex, HStack, VStack, Text } from '@chakra-ui/layout';
import React from 'react';
import moment from 'moment';
import { Spacer } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box mt={10}>
      <Flex alignItems="center">
        <HStack>
          <Text fontSize="2.6rem" fontWeight="bold">
            {moment().format('DD')}
          </Text>
          <VStack justifyContent="center">
            <Text fontWeight="600" fontSize="sm">
              {moment().format('MMM').toUpperCase()}
            </Text>
            <Text fontSize="sm">{moment().format('YYYY')}</Text>
          </VStack>
        </HStack>
        <Spacer />
        <Text fontWeight="600" fontSize="sm">
          {moment().format('dddd').toUpperCase()}
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
