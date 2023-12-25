import React, { useState } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ActionMenu from "../menu/ActionMenu";

const UsersTable = ({ users, handleDeleteUser, handleMakeAdmin }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.email}>
              <TableCell component="th" scope="row">
                {user.email}
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  onClick={() => handleDeleteUser(user)}
                  style={{
                    marginRight: "10px",
                    backgroundColor: "red",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                    borderRadius: "20%",
                  }}
                  size="small"
                >
                  <DeleteIcon />
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClick}
                  style={{
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                    borderRadius: "20%",
                  }}
                >
                  <AddCircleOutlineIcon />
                </Button>
                <ActionMenu
                  anchorEl={anchorEl}
                  handleClose={handleClose}
                  handleMakeAdmin={() => handleMakeAdmin(user)}
                  handleEditUser={() => handleEditUser(user)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
