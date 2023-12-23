"use client";
import Link from "next/link"
import React from "react";
import Button from "@mui/material/Button";

const BlueButton = ({ startIcon, text, routeToPush, type }) => {
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        style={{
          backgroundColor: "#1976D2",
          "&:hover": { backgroundColor: "#1565C0" },
        }}
        component={Link} href={routeToPush || "#"}
        startIcon={startIcon}
        type={type ? type : "button"}
      >
        {text}
      </Button>
    </div>
  );
};

export default BlueButton;
