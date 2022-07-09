/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ description, lang, meta, title, ogImage, uri = '' }) => {
  const { site, wp } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
        wp {
          generalSettings {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || wp.generalSettings?.description
  const pageTitle = title || wp.generalSettings?.title
  const defaultTitle = pageTitle === wp.generalSettings?.title ? '' : wp.generalSettings?.title
  const defaultMeta = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:url`,
      content: `${site.siteMetadata?.siteUrl + uri}`,
    },
    {
      property: `og:title`,
      content: pageTitle,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:title`,
      content: pageTitle,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]
  if (ogImage) {
    defaultMeta.push({
      property: `og:image`,
      content: site.siteMetadata?.siteUrl + ogImage,
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={defaultMeta.concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `zh-Hant-TW`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
