import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

import Link from 'components/Link'

const Header = ({ title, pathname, ...props }) => {
  return (
    <Flex
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      alignItems="center"
      zIndex="docked"
      boxShadow="md"
      bg={'white'}
      color={'black'}
      transition="background 500ms, color 500ms"
      height="header"
      {...props}
    >
      <Box px="1.25em" py="4">
        <Link to="/" fontSize="xl" fontWeight="bold">
          {title}
        </Link>
      </Box>
      <Box flexGrow="1" />
    </Flex>
  )
}

export default Header
