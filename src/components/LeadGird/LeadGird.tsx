import React from 'react';
import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  rem,
  Image,
  BackgroundImage,
  Center,
  Text,
  Flex,
  Button,
  Tooltip,
} from '@mantine/core';
import image1 from '../../img/pexels-irina-iriser-1379640.jpg';
import image2 from '../../img/pexels-eberhard-grossgasteiger-640781.jpg';
import image3 from '../../img/pexels-pixabay-51387.jpg';
import image4 from '../../img/pexels-pok-rie-982263.jpg';
import { useToggle } from '@mantine/hooks';
const PRIMARY_COL_HEIGHT = rem(500);

const LeadGird = () => {
  let images = [image1, image2, image3, image4]
  const [value, toggle] = useToggle([0, 1, 2, 3]);
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  return (
    <Container my="xl" size={'xl'}>
      <SimpleGrid cols={{ base: 1, xl: 2 }} spacing="md">
        <BackgroundImage radius="md" src={images[value]} style={{ height: PRIMARY_COL_HEIGHT }}>
          {/* <Center p="md"> */}
          <Flex
            h={'100%'}
            gap="xs"
            justify="flex-start"
            align="end"
            direction="row"
            wrap="wrap"
            p={30}
            fs={'italic'}
            bg="rgba(0, 0, 0, .3)"
            c={"white"}
          >
            {'<Flex >'}
            <br></br>
            Flex component is an alternative to Group and Stack. Flex is more flexible, it allows
            creating both horizontal and vertical flexbox layouts, but requires more configuration.
            Unlike Group and Stack Flex is polymorphic and supports responsive props.
            <Text c="white" fw={600}>
              BackgroundImage component can be used to add any content on image. It is useful for
              hero headers and other similar sections
            </Text>
            {'</Flex>'}
          </Flex>
          {/* </Center> */}
        </BackgroundImage>
        <Grid gutter="md">
          <Grid.Col>
            <Image radius="md" src={value+2>3?images[value+2-4]:images[value+2]} style={{ height: SECONDARY_COL_HEIGHT }} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image radius="md" src={value+1>3?images[value+1-4]:images[value+1]} style={{ height: SECONDARY_COL_HEIGHT }} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image radius="md" src={value+3>3?images[value+3-4]:images[value+3]} style={{ height: SECONDARY_COL_HEIGHT }} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
      <Tooltip label='Toggle button'>
      <Button mt={10} onClick={() => {toggle()}}>
        Click
      </Button>
      </Tooltip>
    </Container>
  );
};

export default LeadGird;
