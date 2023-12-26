import React, { useState, useEffect } from "react";
import UsersTable from "./ui/tables/UsersTable";
import { Box, Typography } from "@mui/material";
import { getUsersJSONPlaceHolder, getUsersFromFakeDB } from "../utils";
import LogOut from "./ui/buttons/LogOut";
import { findOneById, updateOne, deleteOne, addOne } from "../utils";
import { useSnackbar } from "notistack";

const classes = {
  typography: {
    textAlign: "center",
    marginBottom: "2rem",
    marginTop: "2rem",
    color: "black",
  },
};

const UserHome = ({ isAdmin }) => {
  const [users, setUsers] = useState([]);
  const [secUsers, setSecUsers] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const getUsers = async () => {
    try {
      const secondUsers = await getUsersJSONPlaceHolder();
      const users = await getUsersFromFakeDB();
      setUsers(users);
      setSecUsers(secondUsers);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteUser = async (id) => {
    try {
      const message = await deleteOne(id);
      console.log(message);
      setTimeout(() => {
        getUsers();
        enqueueSnackbar("User deleted successfully", { variant: "success" });
      }, 1000);
    } catch (error) {
      console.error(error);
      enqueueSnackbar("An error occurred while deleting the user", {
        variant: "error",
      });
    }
  };

  const handleMakeAdmin = async (id) => {
    try {
      const user = await findOneById(id);
      user.isAdmin = !user.isAdmin;
      const updatedUser = await updateOne(user);
      console.log(updatedUser);
      setTimeout(() => {
        getUsers();
        enqueueSnackbar("User updated successfully", { variant: "success" });
      }, 1000);
    } catch (error) {
      console.error(error);
      enqueueSnackbar("An error occurred while updating the user", {
        variant: "error",
      });
    }
  };

  const handleEditUser = async (user) => {
    try {
      const message = await updateOne(user);
      console.log(message);
      setTimeout(() => {
        getUsers();
        enqueueSnackbar("User updated successfully", { variant: "success" });
      }, 1000);
    } catch (error) {
      console.error(error);
      enqueueSnackbar("An error occurred while updating the user", {
        variant: "error",
      });
    }
  };

  const handleAddUser = async (user) => {
    try {
      if (users.find((u) => u.email === user.email))
        enqueueSnackbar("User already exists in DB", { variant: "error" });
      else {
        const message = await addOne(user);
        console.log(message);
        setTimeout(() => {
          getUsers();
          enqueueSnackbar("User added successfully", { variant: "success" });
        }, 1000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Box>
      <Box display="flex" justifyContent="end" my={4}>
        <LogOut />
      </Box>
        <Typography variant="h5" style={classes.typography}>
          {isAdmin ? "Bienvenido administrador" : "Bienvenido usuario"}
        </Typography>
      {isAdmin ? (
        <>
          <Typography
            variant="h5"
            gutterBottom
            style={classes.typography}
          >
            Tus usuarios
          </Typography>
          <UsersTable
            users={users}
            handleDeleteUser={handleDeleteUser}
            handleMakeAdmin={handleMakeAdmin}
            handleEditUser={handleEditUser}
            handleAddUser={handleAddUser}
            band="FakeDB"
          />
        </>
      ) : null}
      <Typography
        variant="h5"
        gutterBottom
        style={classes.typography}
      >
        Usuarios JSON Placeholder
      </Typography>
      <UsersTable
        users={secUsers}
        handleDeleteUser={handleDeleteUser}
        handleMakeAdmin={handleMakeAdmin}
        handleEditUser={handleEditUser}
        handleAddUser={handleAddUser}
        band="JSONPlaceholder"
      />
    </Box>
  );
};

export default UserHome;
