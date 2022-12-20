import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "./authSlice";
import { Link, useNavigate } from "react-router-dom";

import React from "react";
import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const Welcome = () => {
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const welcome = user ? `Welcome ${user}!` : "Welcome!";
  const tokenAbbr = `${token.slice(0, 9)}...`;

  return (
    <>
      <Stack direction={"column"} spacing={2}>
        <Typography
          component={"h1"}
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: "3rem",
            textTransform: "capitalize",
          }}
        >
          {welcome}
        </Typography>
        <Typography
          component={"p"}
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            textTransform: "capitalize",
          }}
        >
          Token:{tokenAbbr}
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
            navigate("/postslist");
          }}
        >
          Go To User Posts
        </Button>
      </Stack>
    </>
  );
};

export default Welcome;
