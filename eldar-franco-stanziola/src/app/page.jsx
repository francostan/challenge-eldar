"use client";
import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Home from "./components/Home";
import UserHome from "./components/UserHome";
import { Audio } from "react-loader-spinner";

const HomePage = () => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
    setLoading(false);
  }, []);

  return (
    <Container
      maxWidth="md"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {loading ? (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="black"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      ) : token === "" ? (
        <Home />
      ) : (
        <UserHome />
      )}
    </Container>
  );
};

export default HomePage;
