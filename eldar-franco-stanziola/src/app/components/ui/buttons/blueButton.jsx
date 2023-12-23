import React from "react";
import Button from "@mui/material/Button";

const BlueButton = ({ startIcon, text, type }) => {
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        style={{
          backgroundColor: "#1976D2",
          "&:hover": { backgroundColor: "#1565C0" },
        }}
        startIcon={startIcon}
        type={type ? type : "button"}
      >
        {text}
      </Button>
    </div>
  );
};

export default BlueButton;
