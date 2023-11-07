import { AppShell, Box, Title } from '@mantine/core'
import React from 'react'
import Header from '../Header/Header'
import LeadGird from '../LeadGird/LeadGird'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'

const BasePage = ({header, setHeader, main}) => {
  return (
        <>
      <AppShell
        header={{ height: { base: 60, md: 70, lg: 80 } }}
        padding="md"
        footer={{ height: 320 }}
      >
        <AppShell.Header>
          <Header header={header} setHeader={setHeader}></Header>
        </AppShell.Header>
        <AppShell.Main pb={0}>
          {main}
        </AppShell.Main>
        <AppShell.Footer pos={'relative'}>
          <Footer></Footer>
        </AppShell.Footer>
      </AppShell>
    </>
  )
}

export default BasePage