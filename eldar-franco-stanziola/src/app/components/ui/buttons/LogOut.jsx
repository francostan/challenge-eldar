"use client";
import IconButton from '@mui/material/IconButton';
import Logout from '@mui/icons-material/Logout';

const BackButton = () => {

  const handleBack = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <IconButton aria-label="Volver" style={{ color: "red" }} onClick={handleBack}>
      <Logout />
    </IconButton>
  );
};

export default BackButton;