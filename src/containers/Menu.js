import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Flex,
} from '@chakra-ui/react'

import Button from '../components/Button';
import { Media, responsive } from '../contexts/responsive';
import PostMenu from './PostMenu';

const menus = [
  {
    label: '合作洽詢',
    to: '/contact/'
  },
  {
    label: '品牌服務',
    to: '/service/'
  },
  {
    label: '作品選集',
    to: '/portfolio/'
  },
  {
    label: '計畫基地',
    to: '/#guide'
  },
  {
    label: '團隊故事',
    to: '/about/'
  },
  {
    Element: PostMenu,
  },
  {
    label: '回到首頁',
    to: '/'
  },
]

const Menu = ({ isOpen, onClose, pathname, isSolid }) => {
  return (
    <Box>
      <Media greaterThanOrEqual='md'>
        <Flex alignItems={'center'}>
          {menus.map(({ label, to, Element = Button.Transparent }, i) => {
            const isActive = pathname === to
            return (
              <Box borderLeft={i && '1px solid'} color={'custom.bgGray'} key={i}>
                <Element
                  px="0.75em"
                  fontSize="1rem"
                  color={isSolid ? (isActive ? 'black' : 'custom.bgGray') : (isActive ? 'white' : 'whiteAlpha.700')}
                  to={to}
                  onClick={onClose}
                >{label}</Element>
              </Box>
            )
          })}
        </Flex>
      </Media>
      <Media lessThan='md'>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
        >
          <DrawerContent style={{ width: 'auto' }}>
            <DrawerCloseButton />
            <DrawerBody pl="1em" pt="2.375em" pr="1.375em" boxShadow={'rgb(0 0 0 / 20%) -4px 0px 10px'}>
              {menus.map(({ label, to, Element = Button.Transparent }, i) => (
                <Box borderTop={i && '1px solid'} borderColor="custom.bgGray" py="1em" key={i}>
                  <Element
                    pl="0.375rem"
                    pr="0.875rem"
                    fontSize={responsive('0.875em', '1em')}
                    color={pathname === to ? 'black' : 'custom.bgGray'}
                    to={to}
                    onClick={onClose}
                  >{label}</Element>
                </Box>
              ))}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Media>
    </Box>
  );
};

export default Menu;
