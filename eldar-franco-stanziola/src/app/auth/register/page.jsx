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
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto', 
    maxWidth: '500px',
    backgroundColor: '#f5f5f5',
    padding: '20px', 
  },
  card: {
    width: '100%',
    padding: '32px',
    borderRadius: '12px',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  centerText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '12px',
  },
  avatar: {
    backgroundColor: '#1976D2',
    marginBottom: '8px',
  },
  textField: {
    marginBottom: '5px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  iconMargin: {
    marginRight: '8px',
  },

  typographyError: {
    marginBottom: "8px",
  }
};


const Register = () => {
  return (
    <Container style={classes.container}>
      <RegisterCard classes={classes} />
    </Container>
  )
}

export default Register