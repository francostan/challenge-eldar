"use client";
import React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Link from "next/link";

const GreenButton = ({ startIcon, text, routeToPush }) => {
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
            component={Link} href={routeToPush}
          >
            {text}
          </Button>
    </div>
  );
 };
 
 export default GreenButton;
