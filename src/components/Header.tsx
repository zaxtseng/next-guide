"use client";

import { CalendarIcon, CheckCircleIcon, ChevronRightIcon, SearchIcon } from "@chakra-ui/icons";
import { Button, Container, Flex, IconButton, Image } from "@chakra-ui/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const SignInAndJoin = styled.div`
  height: 52px;
  line-height: 52px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  padding: 0 6px;
  color: #fff;
  float: left;
  & > button {
    padding: 0 10px;
    color: #fff;
  }
  & > button:nth-of-type(1):after {
    content: '';
    width: 1px;
    height: 14px;
    background: #fff;
    position: absolute;
    right: 0;
    top: 2px;
  }
`;

const logo = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Search = styled.a`
    float: right;
    height: 52px;
    line-height: 52px;
    border-left: 1px solid #393939;
    border-right: 1px solid #393939;
    color: #FFF;
    font-size: 20px;
    padding: 0 10px;
`

const Header = () => {
  return (
    <Flex width="full" align="center" justify="center" bg="#202020" borderBottom='1px solid #393939'>
      <Container w="100%" maxW={1200} pos='relative'>
        <SignInAndJoin>
          <Button leftIcon={<CheckCircleIcon />} size='sm' variant='link'>登录</Button>
          <Button leftIcon={<CalendarIcon />} size='sm' variant='link'>注册</Button>
        </SignInAndJoin>
        <Image
          css={logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={140}
          height={37}
        />
        <Search>
            <SearchIcon />
        </Search>
      </Container>
    </Flex>
  );
};

export default Header;
