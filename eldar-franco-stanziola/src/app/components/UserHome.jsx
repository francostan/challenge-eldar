import React from 'react'
import UsersTable from './ui/tables/UsersTable'
import { Box, Typography } from '@mui/material'


const UserHome = () => {
 const users = [{email: "3k3lY@example.com"}];
 const secondUser = [{email: "wZ8jH@example.com"}];
 const handleDeleteUser = (user) => {
   // Llama a tu API para eliminar al usuario
 }

 const handleMakeAdmin = (user) => {
   // Llama a tu API para hacer al usuario administrador
 }

 return (
   <Box>
     <Typography variant="h5" gutterBottom style={{textAlign: "center", marginBottom: "2rem",marginTop: "2rem", color: "black"}}>
       Tus usuarios
     </Typography>
     <UsersTable users={users} handleDeleteUser={handleDeleteUser} handleMakeAdmin={handleMakeAdmin} />
     <Typography variant="h5" gutterBottom style={{textAlign: "center", marginBottom: "2rem", marginTop: "2rem", color: "black"}}>
       Otros usuarios
     </Typography>
     <UsersTable users={secondUser} handleDeleteUser={handleDeleteUser} handleMakeAdmin={handleMakeAdmin} />
   </Box>   
 )
}

export default UserHome