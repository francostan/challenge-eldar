import React from 'react'
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';
import GreenButton from './ui/buttons/greenButton';
import BlueButton from './ui/buttons/blueButton';
import LoginIcon from '@mui/icons-material/Login';
import RegisterIcon from '@mui/icons-material/PersonAdd';

const Home = ({router}) => {
   return (
     <Card 
       variant="outlined" 
       sx={{ 
         display: 'flex', 
         flexDirection: 'column', 
         alignItems: 'center', 
         padding: '2rem', 
         background: 'linear-gradient(5deg, #F5F5F5 20%, #E5E5E5 60%)',
         borderRadius: '1rem',
         boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
       }}
     >
       <CardContent sx={{ textAlign: 'center' }}>
         <Typography variant="h3" gutterBottom>
           Bienvenido a nuestra plataforma
         </Typography>
         <Typography variant="subtitle1" paragraph>
           Elija una opcion
         </Typography>

         <Box sx={{ mb: 2 }}>
           <Grid container spacing={3} justifyContent="center" alignItems="center">
             <Grid item>
               <GreenButton startIcon={<LoginIcon />} text="Iniciar sesion" routeToPush={"auth/login"} />
             </Grid>
             <Grid item>
               <BlueButton startIcon={<RegisterIcon />} text="Registrarse" routeToPush={"auth/register"} />
             </Grid>
           </Grid>
         </Box>
       </CardContent>
     </Card>
     );
}

export default Home

