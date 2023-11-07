import React from 'react'
import { Card, Overlay, Button, Text } from '@mantine/core';
import classes from './ImageActionBanner.module.css';

const Banner = () => {
    return (
        <Card radius="md" className={classes.card}>
          <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />
    
          <div className={classes.content}>
            <Text size="xl" fw={700} className={classes.title}>
              Banner component
            </Text>
    
            <Text size="sm" className={classes.description}>
              Save up to 25% at Fifth Season Hotels in Europe, the Middle East, Africa and Asia Pacific
            </Text>
    
            <Button className={classes.action} variant="white" color="dark" size="xs">
              Action button
            </Button>
          </div>
        </Card>
      );
}

export default Banner