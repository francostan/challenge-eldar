import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Dialog,
} from "@mui/material";
import { generatePages, filterAndGetByValue } from "../../../utils";
import Paging from "../others/Pagination";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchBar from "../others/SearchBar";
import RegisterCard from "../cards/RegisterCard";

const classes = {
  tableContainer: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  deleteButton: {
    marginRight: "10px",
    backgroundColor: "red",
    justifyContent: "center",
    width: "30px",
    height: "30px",
    borderRadius: "20%",
  },
  adminButton: {
    marginRight: "10px",
    justifyContent: "center",
    width: "30px",
    height: "30px",
    borderRadius: "20%",
  },
  editButton: {
    marginRight: "10px",
    backgroundColor: "green",
    justifyContent: "center",
    width: "10px",
    height: "30px",
    borderRadius: "20%",
  },
  addButton: {
    justifyContent: "center",
    width: "30px",
    height: "30px",
    borderRadius: "20%",
  },
};

const UsersTable = ({
  users,
  handleDeleteUser,
  handleMakeAdmin,
  handleEditUser,
  handleAddUser,
  band,
}) => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [open, setOpen] = useState(false);

  const handleClickOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (search !== "") {
      setFilteredUsers(filterAndGetByValue(search, users));
      setPages(generatePages(filterAndGetByValue(search, users)));
    } else if (users && users.length > 0) {
      setFilteredUsers(users);
      setPages(generatePages(users));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, users]);

  return (
    <TableContainer component={Paper} style={classes.tableContainer}>
      <SearchBar setSearch={setSearch} search={search} />
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.slice((page - 1) * 5, page * 5).map((user) => (
            <TableRow key={user.email}>
              <TableCell component="th" scope="row">
                {user.name || user.firstName + " " + user.lastName}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell align="right">
                {band === "FakeDB" && (
                  <>
                    <Button
                      variant="contained"
                      onClick={() => handleDeleteUser(user.id || "")}
                      style={classes.deleteButton}
                    >
                      <DeleteIcon />
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => handleMakeAdmin(user.id || "")}
                      title={user.isAdmin ? "Quitar Admin" : "Hacer Admin"}
                      style={classes.adminButton}
                      backgroundColor={user.isAdmin ? "red" : "blue"}
                    >
                      <AdminPanelSettingsIcon />
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => handleClickOpen(user)}
                      title="Editar usuario"
                      style={classes.editButton}
                    >
                      <EditIcon />
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                      <RegisterCard
                        user={selectedUser}
                        handleClose={handleClose}
                        handleEditUser={handleEditUser}
                      />
                    </Dialog>
                  </>
                )}
                {band === "JSONPlaceholder" && (
                  <Button
                    variant="contained"
                    color="secondary"
                    title="Agregar a DB"
                    onClick={() => handleAddUser(user)}
                    style={classes.addButton}
                  >
                    <AddCircleOutlineIcon />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {pages >= 1 && users && users.length > 0 ? (
        <Paging pages={pages} page={page} setPage={setPage} />
      ) : null}
    </TableContainer>
  );
};

export default UsersTable;
