import React from "react"
import { Link, graphql } from "gatsby"

import Seo from "../containers/Seo"
import PostArchive from "../containers/PostArchive"
import { responsive } from "../contexts/responsive"
import { Container } from "@chakra-ui/react"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Container py="2em">
        <Seo title="特輯列表" />
        <p>
          目前沒有文章喔
        </p>
      </Container>
    )
  }

  return (
    <>
      <Seo title="特輯列表" />
      <Container my={responsive('2em', '4em')} fontSize="1rem">
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
