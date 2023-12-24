"use client";
import React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

const BlueButton = ({ startIcon, text, routeToPush, type }) => {
  const router = useRouter();
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
        onClick={() => {
          if (routeToPush) router.push(routeToPush);
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default BlueButton;
