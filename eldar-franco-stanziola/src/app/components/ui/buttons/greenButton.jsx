"use client";
import React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

const GreenButton = ({ startIcon, text, routeToPush, type }) => {
  const router = useRouter();
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
        type={type ? type : "button"}
        onClick={() => {
          if (routeToPush) router.push(routeToPush);
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default GreenButton;
