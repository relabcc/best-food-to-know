import React, { forwardRef } from 'react';
import { Button as ChButton, IconButton } from "@chakra-ui/react";

import Link from './Link'
import { responsive } from '../contexts/responsive';

const Button = forwardRef(({ href, to, ...props }, ref) => {
  if (href || to) return <ChButton as={p => <Link {...p} href={href} to={to} />} ref={ref} {...props} />
  return <ChButton ref={ref} {...props} />
})

Button.Secondary = forwardRef((props, ref) => (
  <Button colorScheme="secondary" ref={ref} {...props} />
))

Button.White = forwardRef((props, ref) => (
  <Button bg="white" border="2px solid" color="black" _hover={{ bg: 'white' }} ref={ref} {...props} />
))

Button.Outline = forwardRef((props, ref) => (
  <Button
    bg="transparent"
    border={responsive('1.5px solid', '3px solid')}
    color="black"
    _hover={{
      bg: 'black',
      color: 'white',
      borderColor: 'black',
    }}
    height="auto"
    ref={ref}
    {...props}
  />
))

Button.Transparent = forwardRef((props, ref) => (
  <Button
    bg="transparent"
    border="none"
    color="custom.bgGray"
    _hover={{
      bg: 'transparent',
      color: 'black'
    }}
    height="auto"
    ref={ref}
    {...props}
  />
))

Button.Icon = forwardRef(({ href, to, ...props }, ref) => {
  if (href || to) return <IconButton as={p => <Link {...p} href={href} to={to} />} ref={ref} {...props} />
  return <IconButton ref={ref} {...props} />
})

export default Button
