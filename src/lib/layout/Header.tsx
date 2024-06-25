import { Box, Divider, AbsoluteCenter, Flex, Image } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Box width="full">
        <Image h="216px" w="528px" src="/logo.jpg" />
        <Box position="relative" padding="10" width="full">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            Serving Four Corners Area for 10+ years
          </AbsoluteCenter>
        </Box>
      </Box>
    </Flex>
  );
};

export default Header;
