import { Container, Heading, VStack, Text } from '@chakra-ui/react'
import Button from 'components/Button'
import React from 'react'

const NotFoundPage = () => (
  <Container py="8" as={VStack} spacing={4} justifyContent="center">
    <Heading as="h1">NOT FOUND</Heading>
    <Text>頁面不存在，可能網址有誤或是頁面已下架。</Text>
    <Button to="/">返回首頁</Button>
  </Container>
)

export default NotFoundPage
