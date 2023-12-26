"use client";
import React from 'react';
import RegisterCard from '../../components/ui/cards/RegisterCard';
import { Container } from '@mui/material';


const classes = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
    padding: '20px',
  },
};


const Register = () => {
  return (
    <Container style={classes.container}>
      <RegisterCard />
    </Container>
  )
}

export default Register