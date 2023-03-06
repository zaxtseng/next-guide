import { Box, Button, Heading, Text, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
// import Image from "next/image";
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

const Swiper = () => {
  const images = ["/imgs/img1.png", "/imgs/img2.png", "/imgs/img3.png"];
  const renderThumbs = () =>
    images.map((img, idx) => (
      <div key={idx}>
        <Image
          src={img}
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
      showArrows={false}
      renderThumbs={renderThumbs}
    >
      <CarouselItem>
        <Image
          src="/imgs/img1.png"
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
            Final Fantasy XIII
          </Heading>
          <Text>
            The game takes place in the fictional floating world of Cocoon,
            whose government, the Sanctum, is ordering a purge of civilians who
            have supposedly come into contact with Pulse, the much-feared world
            below.{" "}
          </Text>
          <Button colorScheme="red">Check Detail</Button>
        </Box>
      </CarouselItem>
      <CarouselItem>
        <Image
          src="/imgs/img2.png"
          alt="image1"
          width={1920}
          height={1200}
          style={{
            maxWidth: "100%",
            height: "700px",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />
        <Box>
          <Heading as="h2" size="lg">
            Final Fantasy VII Remake
          </Heading>
          <Text>
            It is the first in a planned trilogy of games remaking the 1997
            PlayStation game Final Fantasy VII.
          </Text>
          <Button colorScheme="red">Check Detail</Button>
        </Box>
      </CarouselItem>
      <CarouselItem>
        <Image
          src="/imgs/img3.png"
          alt="image1"
          width={1920}
          height={1200}
          style={{
            maxWidth: "100%",
            height: "700px",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />
        <Box>
          <Heading as="h2" size="lg">
            Crisis Core: Final Fantasy VII
          </Heading>
          <Text>
            The game primarily focuses on Zack Fair, a young member of the
            paramilitary organization SOLDIER, who is assigned to look for the
            missing SOLDIER Genesis Rhapsodos.{" "}
          </Text>
          <Button colorScheme="red">Check Detail</Button>
        </Box>
      </CarouselItem>
    </SwiperContainer>
  );
};

export default Swiper;
