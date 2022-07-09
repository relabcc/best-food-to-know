import { Box, Heading, LinkBox, LinkOverlay, Stack } from '@chakra-ui/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import parse from 'html-react-parser'

import Link from '../components/Link'
import { responsive } from '../contexts/responsive'

const PostArchive = ({ posts, ...props }) => {
  return (
    <Box as={`ol`} style={{ listStyle: `none` }} {...props}>
      {posts.map((post) => {
        const title = post.title
        const featuredImage = {
          image: getImage(post.featuredImage?.node?.localFile),
          alt: post.featuredImage?.node?.alt || ``,
        }
        return (
          <li key={post.uri}>
            <Box
              as="article"
              itemScope
              itemType="http://schema.org/Article"
              px={responsive('1em', '3em')}
              py={responsive('1.5em', '5em')}
              borderBottom="1px solid"
              borderBottomColor="gray.100"
            >
              <LinkBox as={Stack} spacing="1em">
                <Stack as="header" spacing="0.5em">
                  {featuredImage?.image && <GatsbyImage {...featuredImage} />}
                  <Heading fontSize={responsive('1.5rem', '2rem')}>
                    <LinkOverlay as={Link} to={post.uri} itemProp="url">
                      <span itemProp="headline">{parse(title)}</span>
                    </LinkOverlay>
                  </Heading>
                  {/* <small>By {post.author?.node?.name} | {post.date}</small> */}
                </Stack>
                <Box
                  as="section"
                  fontWeight="light"
                  itemProp="description"
                  lineHeight="1.75"
                  sx={{
                    '.read-more': {
                      textAlign: 'right',
                    },
                  }}
                >
                  {parse(post.excerpt)}
                </Box>
              </LinkBox>
            </Box>
          </li>
        )
      })}
    </Box>
  )
}

export default PostArchive
