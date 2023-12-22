import React from "react";
import Button from "@mui/material/Button";

const blueButton = ({ startIcon, text }) => {
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
      >
        {text}
      </Button>
    </div>
  );
};

export default blueButton;
