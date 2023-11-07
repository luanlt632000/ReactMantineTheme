import React from 'react';
import { useState } from 'react';
import { Container, Anchor, Group, Burger, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import classes from './DoubleHeader.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import LanguagePicker from '../LanguagePicker/LanguagePicker';

const userLinks = [
  { link: '#', label: 'Privacy & Security' },
  { link: '#', label: 'Account settings' },
  { link: '#', label: 'Support options' },
];

const mainLinks = [
  { link: '#', label: 'Introduction' },
  { link: '#', label: 'Authentication' },
  { link: '#', label: 'Data' },
  { link: '#', label: 'Contact' },
  { link: '#', label: 'form element' },
];

const Header = ({ header, setHeader }) => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setHeader(index);
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));

  const secondaryItems = userLinks.map((item) => (
    <Anchor
      href={item.link}
      key={item.label}
      onClick={(event) => event.preventDefault()}
      className={classes.secondaryLink}
    >
      {item.label}
    </Anchor>
  ));

//   console.log(header);
  return (
    <header className={classes.header}>
      <Container className={classes.inner} size={'xl'}>
        <MantineLogo size={34} />
        <Box className={classes.links} visibleFrom="md">
          <Group justify="flex-end">{secondaryItems}</Group>
          <Group gap={0} justify="flex-end" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </Box>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          hiddenFrom="sm"
        />
        <Box size={'sm'} display={'flex'}>
          <LanguagePicker></LanguagePicker>
          <ColorSchemeToggle />
        </Box>
      </Container>
    </header>
  );
};

export default Header;
