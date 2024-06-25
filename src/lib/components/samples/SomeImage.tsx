'use client';

import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { Flex, Tooltip, IconButton } from '@chakra-ui/react';

const SomeImage = () => {
  return (
    <Flex gap={2} justifyContent="center" alignItems="center">
      <Tooltip label="(970)-553-0499" fontSize="md">
        <IconButton
          variant="outline"
          aria-label="Call"
          size="lg"
          icon={<PhoneIcon />}
        />
      </Tooltip>
      <Tooltip
        variant="outline"
        label="atencio-enterprises@outlook.com"
        fontSize="md"
      >
        <IconButton
          variant="outline"
          aria-label="Call"
          size="lg"
          icon={<EmailIcon />}
        />
      </Tooltip>
    </Flex>
  );
};

export default SomeImage;
