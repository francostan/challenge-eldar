import React from "react";
import Container from "@mui/material/Container";
import Home from "./components/Home";
/* import './page.css'; */

const HomePage = () => {
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
      <Home />
    </Container>
  );
};

export default HomePage;
