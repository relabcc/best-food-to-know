import React from "react"
import { Link, graphql } from "gatsby"
import { Container } from "@chakra-ui/react"

import Seo from "containers/Seo"
import PostArchive from "containers/PostArchive"
import { responsive } from "contexts/responsive"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Container py="2em">
        <Seo />
        <p>
          目前沒有文章喔
        </p>
      </Container>
    )
  }

  return (
    <>
      <Seo />
      <Container my={responsive('2em', '4em')}>
        <PostArchive posts={posts} />

        {previousPagePath && (
          <>
            <Link to={previousPagePath}>上一頁</Link>
            <br />
          </>
        )}
        {nextPagePath && <Link to={nextPagePath}>下一頁</Link>}
      </Container>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "YYYY-MM-DD")
        title
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
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`
