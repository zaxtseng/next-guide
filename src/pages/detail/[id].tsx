import { Layout } from "@/components/Layout";
import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";

const Detail = () => {
  const DetailContainer = css`
    padding: 10px;
    & > p {
      font-size: 14px;
      margin-bottom: 10px;
    }
    & > img {
      margin-bottom: 10px;
      display: block;
    }
  `
  return (
    <Layout>
      <Box maxW={1200} mx='auto' mt={30}>
        <Heading as='h2' size='xl'>asdasd</Heading>
        <Heading as='h4' size='lg' mt='10px' color='gray.400' fontWeight='light'>123asdasd</Heading>
        <Divider mt='10px' />
        <Box mt='10px' overflow='hidden'>
          <Text float='left'>作者: SE</Text>
          <Text float='right'>发布时间: 20xx年</Text>
        </Box>
        <Divider mt='10px' />
        <Box css={DetailContainer}>
          <p>123123123123</p>
          <p>123123123123</p>
          <p>123123123123</p>
        </Box>
      </Box>
    </Layout>
  );
};

export default Detail;
