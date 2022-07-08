import React, { forwardRef } from 'react';
import { Link as RouterLink } from 'gatsby'
import { Link as ChLink } from "@chakra-ui/react";

const Link = forwardRef(({ to, ...props }, ref) => {
  if (to) {
    return <ChLink as={p => <RouterLink to={to} {...p} />} ref={ref} {...props} />
  }
  const isExternal = /^http/.test(props.href)
  return <ChLink isExternal={isExternal} ref={ref} {...props} />
})

export default Link
