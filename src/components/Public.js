import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Login from "../features/auth/Login";

const Public = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stack spacing={4}>
        <Typography
          sx={{
            fontFamily: `Poppins, sans-serif`,
            fontWeight: 700,
            fontSize: "2rem",
          }}
        >
          Refresh Tokens With RTK Query
        </Typography>
        <Button
          variant="outlined"
          sx={{
            fontFamily: `Poppins,sans-serif`,
            fontSize: "1.2rem",
            fontWeight: 600,
            borderColor: "white",
            color: "white",
            textTransform: "none",
            ":hover": {
              borderColor: "#4285F4",
              color: "#4285F4",
            },
          }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
      </Stack>
    </>
  );
};

export default Public;
