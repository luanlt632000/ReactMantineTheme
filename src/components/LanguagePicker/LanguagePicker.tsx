import React from 'react'
import { useState } from 'react';
import { UnstyledButton, Menu, Image, Group } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import english from "./images/english.png";
import vietnam from "./images/vietnam.png";
import classes from './LanguagePicker.module.css';

const data = [
  { label: 'English', image: english },
  { label: 'Vietnamses', image: vietnam }
];
const LanguagePicker = () => {
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState(data[0]);
    const items = data.map((item) => (
      <Menu.Item
        leftSection={<Image src={item.image} width={18} height={18} />}
        onClick={() => setSelected(item)}
        key={item.label}
      >
        {item.label}
      </Menu.Item>
    ));
  
    return (
      <Menu
        onOpen={() => setOpened(true)}
        onClose={() => setOpened(false)}
        radius="sm"
        width="target"
        withinPortal
      >
        <Menu.Target>
          <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
            <Group gap="xs">
              <Image src={selected.image} width={15} height={15} />
              <span className={classes.label}>{selected.label}</span>
            </Group>
            <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>{items}</Menu.Dropdown>
      </Menu>
    );
}

export default LanguagePicker