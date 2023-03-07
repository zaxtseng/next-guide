import { baseURL } from "@/axiosConfig";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import axios from "axios";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SwiperContainer = styled(Carousel)`
  position: relative;
  & > .carousel:last-child {
    position: absolute;
    left: 0;
    bottom: 0;
    & > .thumbs-wrapper > .thumbs {
      display: flex;
      justify-content: center;
    }
  }
`;
const CarouselItem = styled.div`
  position: relative;
  & > div {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    color: #fff;
    padding-top: 460px;
    text-align: left;
    width: 100%;
    max-width: 1200px;
    & > p {
      margin: 15px 0;
      font-size: 14px;
      width: 450px;
    }
  }
  & > img {
    filter: brightness(60%);
  }
`;

export interface ISwiper {
  id: number;
  title: string;
  description: string;
  url: string;
  vid: number;
}

const Swiper = ({ data }: { data: ISwiper[] }) => {
  // console.log('data: ', data);
  const renderThumbs = () =>
    data.map((img) => (
      <div key={img.id}>
        <Image
          src={img.url}
          alt="logo"
          width={80}
          height={30}
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    ));

  return (
    <SwiperContainer
      showIndicators={false}
      showStatus={false}
      showArrows={false } 

      renderThumbs={renderThumbs}
    >
      {data.map((swiper) => (
        <CarouselItem key={swiper.id}>
          <Image
            src={swiper.url}
            alt="image1"
            width={1920}
            height={1200}
            style={{
              maxWidth: "100%",
              height: "700px",
              objectFit: "cover",
              objectPosition: "50% 20%",
            }}
          />
          <Box>
            <Heading as="h2" size="lg">
              {swiper.title}
            </Heading>
            <Text>{swiper.description}</Text>
            <Button colorScheme="red">
              <Link href='/detail/[id]' as={`/detail/${swiper.vid}`}>Check Detail</Link>
            </Button>
          </Box>
        </CarouselItem>
      ))}
    </SwiperContainer>
  );
};

export default Swiper;

export const loadSwiper = () => axios.get("/api/swiper", { baseURL });
