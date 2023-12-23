"use client";
import React from 'react';
import LoginCard from '@/app/components/ui/cards/LoginCard';
import { Container } from '@mui/material';


export default function Login() {

  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', 
        backgroundColor: '#f4f4f4',
      }}
    >
      <LoginCard />
    </Container>
  );
};
