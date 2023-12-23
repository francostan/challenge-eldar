"use client";
import React from "react";
import Button from "@mui/material/Button";
import Link from "next/link";

const GreenButton = ({ startIcon, text, routeToPush, type }) => {
  return (
    <div>
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: "#4CAF50",
              "&:hover": { backgroundColor: "#388E3C" },
            }}
            startIcon={startIcon}
            component={Link} href={routeToPush || "#"}
            type={type ? type : "button"}
          >
            {text}
          </Button>
    </div>
  );
 };
 
 export default GreenButton;
