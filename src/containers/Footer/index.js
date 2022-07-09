import React from 'react'
import format from 'date-fns/format'
import { Flex, Text } from '@chakra-ui/react'

import { responsive } from 'contexts/responsive'

const Footer = (props) => {
  return (
    <Flex
      as="footer"
      height="inherit"
      color="white"
      bg="black"
      flexDirection={responsive('column', 'row')}
      px={6}
      py="8"
      justifyContent={responsive('flex-start', 'space-between')}
      {...props}
    >
      <Text fontSize={responsive('0.75em', '1em')}>
        Copyright © {format(new Date(), 'yyyy')}. All rights reserved.
      </Text>
    </Flex>
  )
}

export default Footer
