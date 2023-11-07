import { AppShell, Box, Title, useMantineTheme } from '@mantine/core';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LeadGird from '../../components/LeadGird/LeadGird';
import { useState } from 'react';
import BasePage from '../../components/BasePage/BasePage';
import Authen from '../../components/Authen/Authen';
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword';
import TableData from '../../components/TableData/TableData';
import Questions from '../../components/Questions/Questions';
import Contact from '../../components/Contact/Contact';

export function HomePage() {
  const theme = useMantineTheme();
  const [header, setHeader] = useState(0);

  switch (header) {
    case 0:
      return (
        <BasePage
          header={header}
          setHeader={setHeader}
          main={
            <>
              <Box
                my={'xl'}
                style={{ justifyContent: 'center', justifyItems: 'center', display: 'flex' }}
              >
                <Banner></Banner>
              </Box>
              <Box ml={150}>
                <Title order={1}>LeadGird component</Title>
              </Box>
              <LeadGird></LeadGird>
            </>
          }
        ></BasePage>
      );
    case 1:
      return (
        <BasePage
          header={header}
          setHeader={setHeader}
          main={
            <>
              <Box my={'xl'}>
                <Title ml={150} order={1}>
                  Login form
                </Title>
                <Box
                  w={'100%'}
                  style={{
                    justifyContent: 'center',
                    justifyItems: 'center',
                    display: 'flex',
                  }}
                >
                  <Authen w={'25%'} />
                </Box>
              </Box>
              <Box>
                <Title ml={150} order={1}>
                  Forgot password form
                </Title>
                <ForgotPassword />
              </Box>
            </>
          }
        ></BasePage>
      );
    case 2:
      return (
        <BasePage
          header={header}
          setHeader={setHeader}
          main={
            <>
              <Box my={'xl'}>
                <Title ml={150} order={1}>
                  Data table
                </Title>
                <Box
                  w={'100%'}
                  style={{
                    justifyContent: 'center',
                    justifyItems: 'center',
                    display: 'flex',
                  }}
                >
                  <Box w={'60%'} p={20} style={{ border: 'solid 1px gray', borderRadius: 10 }}>
                    <TableData />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Title ml={150} order={1}>
                  Frequently Asked Questions
                </Title>
                <Questions />
              </Box>
            </>
          }
        ></BasePage>
      );
    case 3:
      return (
        <BasePage
          header={header}
          setHeader={setHeader}
          main={
            <>
              <Box
                my={'xl'}
                style={{
                  justifyContent: 'center',
                  justifyItems: 'center',
                  display: 'flex',
                }}
              >
                <Box w={'60%'}>
                  <Contact />
                </Box>
              </Box>
            </>
          }
        ></BasePage>
      );
    case 4:
      return(
        <BasePage
          header={header}
          setHeader={setHeader}
          main={
            <>
              <Box
                my={'xl'}
                style={{
                  justifyContent: 'center',
                  justifyItems: 'center',
                  display: 'flex', flexFlow:"column"
                }}
              >
                <Title ml={150} order={1}>
                  Button
                </Title>
                  <iframe height={"1000"} src='https://mantine.dev/core/button/'></iframe>
              </Box>

              <Box
                my={'xl'}
                style={{
                  justifyContent: 'center',
                  justifyItems: 'center',
                  display: 'flex', flexFlow:"column"
                }}
              >
                <Title ml={150} order={1}>
                  Input
                </Title>
                  <iframe height={"1000"} src='https://ui.mantine.dev/category/inputs/'></iframe>
              </Box>

              <Box
                my={'xl'}
                style={{
                  justifyContent: 'center',
                  justifyItems: 'center',
                  display: 'flex', flexFlow:"column"
                }}
              >
                <Title ml={150} order={1}>
                  Input
                </Title>
                  <iframe height={"1000"} src='https://ui.mantine.dev/category/inputs/'></iframe>
              </Box>

              <Box
                my={'xl'}
                style={{
                  justifyContent: 'center',
                  justifyItems: 'center',
                  display: 'flex', flexFlow:"column"
                }}
              >
                <Title ml={150} order={1}>
                Dropzones
                </Title>
                  <iframe height={"800"} src='https://ui.mantine.dev/category/dropzones/'></iframe>
              </Box>
            </>
          }
        ></BasePage>
      )
  }
}
