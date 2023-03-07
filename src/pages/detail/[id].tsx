import { baseURL } from "@/axiosConfig";
import { Layout } from "@/components/Layout";
import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";

const Detail = ({detail}:{detail:any}) => {
  
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
  `;
  return (
    <Layout>
      <Box maxW={1200} mx="auto" mt={30}>
        <Heading as="h2" size="xl">
          {detail.title}
        </Heading>
        <Heading
          as="h4"
          size="lg"
          mt="10px"
          color="gray.400"
          fontWeight="light"
        >
          {detail.sub}
        </Heading>
        <Divider mt="10px" />
        <Box mt="10px" overflow="hidden">
          <Text float="left">作者: {detail.author}</Text>
          <Text float="right">发布时间: {detail.publish}</Text>
        </Box>
        <Divider mt="10px" />
        <Box css={DetailContainer} dangerouslySetInnerHTML={{__html: detail.content}}>
          
        </Box>
      </Box>
    </Layout>
  );
};

export default Detail;

export const getStaticPaths: GetStaticPaths = async () => {
  // 获取所有路由参数
  const { data } = await axios.get("/api/videos", { baseURL });
  // 返回指定格式的参数,[{params:{id: "1"}}]
  const paths = data.map((id: string) => ({ params: { id } }));
  // console.log('paths: ', paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let id = params!.id;
  const { data: detail } = await axios.get(`/api/detail?id=${id}`,{baseURL});
  return {
    props: {
      detail,
    },
  };
};
