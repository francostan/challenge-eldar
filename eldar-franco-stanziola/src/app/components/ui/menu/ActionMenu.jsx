import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ActionMenu = ({ anchorEl, handleClose, handleMakeAdmin, handleEditUser }) => {
 return (
   <Menu
     anchorEl={anchorEl}
     open={Boolean(anchorEl)}
     onClose={handleClose}
   >
     <MenuItem onClick={handleMakeAdmin}>Hacer Admin</MenuItem>
     <MenuItem onClick={handleEditUser}>Editar Usuario</MenuItem>
   </Menu>
 );
};

export default ActionMenu;