import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import { Stack, Box, Container } from '@chakra-ui/react'
import parse from 'html-react-parser'
import { convert } from 'html-to-text'
import styled from '@emotion/styled'
import { getImage } from 'gatsby-plugin-image'

import Seo from 'containers/Seo'
import { responsive } from 'contexts/responsive'
import Link from 'components/Link'

const StyledHTML = styled(Box)`
  --wp--preset--color--black: #000000;
  --wp--preset--color--cyan-bluish-gray: #abb8c3;
  --wp--preset--color--white: #ffffff;
  --wp--preset--color--pale-pink: #f78da7;
  --wp--preset--color--vivid-red: #cf2e2e;
  --wp--preset--color--luminous-vivid-orange: #ff6900;
  --wp--preset--color--luminous-vivid-amber: #fcb900;
  --wp--preset--color--light-green-cyan: #7bdcb5;
  --wp--preset--color--vivid-green-cyan: #00d084;
  --wp--preset--color--pale-cyan-blue: #8ed1fc;
  --wp--preset--color--vivid-cyan-blue: #0693e3;
  --wp--preset--color--vivid-purple: #9b51e0;
  --ast-global-color-0: var(--chakra-colors-blue-600);
  --ast-global-color-1: #3a3a3a;
  --ast-global-color-2: #3a3a3a;
  --ast-global-color-3: #4b4f58;
  --ast-global-color-4: #f5f5f5;
  --ast-global-color-5: #ffffff;
  --ast-global-color-6: #f2f5f7;
  --ast-global-color-7: #424242;
  --ast-global-color-8: #000000;

  font-size: 1rem;
  h2 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 1.5em;
    font-weight: normal;
    line-height: 1.5;
  }
  h3 {
    font-size: 1.25em;
    margin-top: 2.5em;
    margin-bottom: 1em;
    font-weight: bold;
  }
  h4 {
    font-size: 1.125em;
    margin-top: 2.5em;
    margin-bottom: 1em;
    font-weight: bold;
  }
  p {
    line-height: 1.75;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  a {
    color: var(--chakra-colors-blue-600);
    text-decoration: underline;
  }
  ol,
  ul {
    margin-top: 1.5em;
  }

  li > ol,
  li > ul {
    margin-top: 0.25em;
    margin-bottom: 0.75em;
  }

  hr {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  p.has-background {
    padding: 1.25em 2.375em;
  }
  .has-ast-global-color-4-background-color {
    background-color: var(--ast-global-color-4);
  }
  .has-black-color {
    color: var(--wp--preset--color--black) !important;
  }

  .has-cyan-bluish-gray-color {
    color: var(--wp--preset--color--cyan-bluish-gray) !important;
  }

  .has-white-color {
    color: var(--wp--preset--color--white) !important;
  }

  .has-pale-pink-color {
    color: var(--wp--preset--color--pale-pink) !important;
  }

  .has-vivid-red-color {
    color: var(--wp--preset--color--vivid-red) !important;
  }

  .has-luminous-vivid-orange-color {
    color: var(--wp--preset--color--luminous-vivid-orange) !important;
  }

  .has-luminous-vivid-amber-color {
    color: var(--wp--preset--color--luminous-vivid-amber) !important;
  }

  .has-light-green-cyan-color {
    color: var(--wp--preset--color--light-green-cyan) !important;
  }

  .has-vivid-green-cyan-color {
    color: var(--wp--preset--color--vivid-green-cyan) !important;
  }

  .has-pale-cyan-blue-color {
    color: var(--wp--preset--color--pale-cyan-blue) !important;
  }

  .has-vivid-cyan-blue-color {
    color: var(--wp--preset--color--vivid-cyan-blue) !important;
  }

  .has-vivid-purple-color {
    color: var(--wp--preset--color--vivid-purple) !important;
  }

  .wp-block-image {
    margin-bottom: 1em;
  }

  .wp-block-media-text {
    direction: ltr;
    display: grid;
    grid-template-columns: 50% 1fr;
    grid-template-rows: auto;
  }

  .wp-block-media-text.is-vertically-aligned-center
    .wp-block-media-text__content,
  .wp-block-media-text.is-vertically-aligned-center .wp-block-media-text__media,
  .wp-block-media-text .wp-block-media-text__content,
  .wp-block-media-text .wp-block-media-text__media {
    align-self: center;
  }

  .wp-block-media-text .wp-block-media-text__media {
    grid-column: 1;
    grid-row: 1;
    margin: 0;
  }

  .wp-block-media-text .wp-block-media-text__content {
    direction: ltr;
    grid-column: 2;
    grid-row: 1;
    padding: 0 8%;
    word-break: break-word;
  }

  @media (min-width: 544px) {
    .entry-content .wp-block-media-text .wp-block-media-text__content {
      padding: 0 0 0 8%;
    }
  }

  .wp-block-button__link {
    color: #fff;
    background-color: #32373c;
    border-radius: 9999px;
    box-shadow: none;
    cursor: pointer;
    display: inline-block;
    font-size: 1.125em;
    padding: calc(0.667em + 2px) calc(1.333em + 2px);
    text-align: center;
    text-decoration: none;
    word-break: break-word;
    box-sizing: border-box;
  }

  .wp-block-buttons {
    display: flex;
    gap: 0.5em;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .wp-block-buttons > .wp-block-button {
    display: inline-block;
    margin: 0;
  }

  .wp-block-buttons > .wp-block-button.has-custom-width {
    max-width: none;
  }

  .wp-block-buttons > .wp-block-button.wp-block-button__width-50 {
    width: calc(50% - var(--wp--style--block-gap, 0.5em) * 0.5);
  }

  .wp-block-button .wp-block-button__link {
    border-style: solid;
    border-color: var(--ast-global-color-0);
    background-color: var(--ast-global-color-0);
    color: #ffffff;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1;
    border-radius: 2px;
  }

  .wp-block-buttons .wp-block-button .wp-block-button__link {
    padding-top: 15px;
    padding-right: 30px;
    padding-bottom: 15px;
    padding-left: 30px;
  }

  .wp-block-buttons > .wp-block-button.has-custom-width .wp-block-button__link {
    width: 100%;
  }
`

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  // const featuredImage = {
  //   image: getImage(post.featuredImage?.node?.localFile),
  //   alt: post.featuredImage?.node?.alt || ``,
  // }
  // const [idArray, setId] = useState([])
  return (
    <Container
      py={responsive('1em', '4em')}
      my={responsive('2em', '4em')}
      px={responsive('2em', '6em')}
      fontFamily="blog"
      fontSize="1rem"
    >
      <Seo
        title={post.title}
        description={convert(post.excerpt, {
          limits: { maxChildNodes: 1, ellipsis: '' },
        })}
        ogImage={
          getImage(post.featuredImage?.node?.localFile)?.images.fallback.src
        }
        uri={post.uri}
      />

      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Stack>
          <Box
            as="h1"
            fontSize="2.5em"
            fontWeight="700"
            itemProp="headline"
            textAlign={'center'}
            pb="2rem"
            mb="2rem"
            borderBottom="1px solid"
          >
            {parse(post.title)}
          </Box>

          {/* <p>By {post.author?.node?.name} | {post.date}</p> */}

          {/* if we have a featured image for this post let's display it */}
        </Stack>

        {useMemo(() => {
          // setId([])
          return (
            !!post.content && (
              <StyledHTML
                mt="2em"
                as="section"
                className="entry-content"
                itemProp="articleBody"
              >
                {parse(post.content, {
                  // replace: (domNode) => {
                  //   const { attribs } = domNode
                  //   if (domNode.name?.startsWith('h') && domNode.firstChild?.data) {
                  //     console.log(domNode.firstChild?.data)
                  //   }
                  //   if (attribs?.id && domNode.firstChild?.data) {
                  //     setId(arr => arr.concat({ id: attribs.id, tag: domNode.name, title: domNode.firstChild.data }))
                  //     const props = attributesToProps(domNode.attribs);
                  //     return (
                  //       <Element name={attribs.id}>
                  //         {createElement(domNode.name, props)}
                  //       </Element>
                  //     )
                  //   }
                  // }
                })}
              </StyledHTML>
            )
          )
        }, [post.content])}

        {/* <Text>發布日期：{post.date}</Text> */}
      </article>

      <Box className="blog-post-nav" mt="2em">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            margin: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.uri} rel="prev">
                ← {parse(previous.title)}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={next.uri} rel="next">
                {parse(next.title)} →
              </Link>
            )}
          </li>
        </ul>
      </Box>
    </Container>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      uri
      excerpt
      content
      title
      date(formatString: "YYYY-MM-DD")
      author {
        node {
          name
        }
      }

      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 1200, height: 628)
            }
          }
        }
      }
    }

    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
