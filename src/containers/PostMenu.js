import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { Link } from 'gatsby'

const articles = [
  ['SEO聖經', '/blog/seo聖經'],
  ['隱私權政策重點', '/blog/隱私權政策重點'],
  ['懶人包', '/blog/懶人包'],
  ['資訊圖表', '/blog/資訊圖表'],
  ['成果報告', '/blog/成果報告'],
  ['資料視覺化', '/blog/資料視覺化'],
  ['內容行銷', '/blog/內容行銷'],
]

const PostMenu = ({ onClick, ...props }) => {
  return (
    <Menu>
      <MenuButton fontWeight="semibold" {...props}>
        特輯列表
      </MenuButton>
      <MenuList fontSize="1rem" minWidth="10em">
        {articles.map(([label, to]) => (
          <MenuItem
            key={to}
            as={Link}
            to={to}
            fontWeight="semibold"
            color="custom.bgGray"
            _hover={{ bg: 'blackAlpha.200', color: 'black' }}
            onClick={onClick}
          >
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PostMenu
