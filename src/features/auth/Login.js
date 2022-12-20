import React from "react";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import { Typography, TextField, Button } from "@mui/material";
import { Stack } from "@mui/system";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ username: user }).unwrap();
      dispatch(setCredentials({ ...userData, user }));
      setUser("");
      navigate("/welcome");
    } catch (err) {
      console.log(err);
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Invalid Credentials");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {isLoading ? (
        <Typography component="h1">Loading...</Typography>
      ) : (
        <>
          <Stack
            direction={"column"}
            spacing={3}
            sx={{
              width: { xs: "80%", sm: "400px" },
              border: `5px solid #4285F4`,
              borderRadius: "25px",
              px: "2rem",
              py: "3rem",
              boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px`,
            }}
          >
            <Typography
              sx={{
                fontFamily: `'Poppins', sans-serif`,
                fontWeight: 600,
                fontSize: "3rem",
              }}
            >
              User Login
            </Typography>
            <form onSubmit={handleSubmit}>
              <Stack direction={"column"} spacing={3}>
                <TextField
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "white",
                    }, //styles the label
                    "&.MuiFormControl-root:hover label": {
                      color: "#4285F4",
                    },
                    "& label.Mui-focused": {
                      color: "#4285F4",
                    },
                    "& .MuiOutlinedInput-root": {
                      // color: "white",
                      "& > fieldset": {
                        borderColor: "white",
                      },

                      "&:hover": {
                        "& fieldset": {
                          borderColor: "#4285F4",
                          color: "#4285F4",
                        },
                        "& .MuiFormLabel-root": {
                          color: "#4285F4",
                        },
                      },
                    },
                  }}
                  type={"text"}
                  label="Username"
                  id="username"
                  ref={userRef}
                  value={user}
                  placeholder={"eg:vimu"}
                  autoComplete="off"
                  onChange={(e) => {
                    if (/\s/.test(e.target.value)) {
                      e.preventDefault();
                      return;
                    }
                    setUser(e.target.value);
                  }}
                  required
                  InputLabelProps={{
                    style: {
                      fontFamily: `'Poppins', sans-serif`,
                      fontWeight: 600,
                    },
                  }}
                  inputProps={{
                    style: {
                      color: "#4285F4",
                      fontFamily: `'Poppins', sans-serif`,
                      fontWeight: 600,
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    fontFamily: `'Poppins', sans-serif`,
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    borderColor: "white",
                    color: "white",
                    ":hover": {
                      borderColor: "#4285F4",
                      color: "#4285F4",
                    },
                  }}
                >
                  Sign In
                </Button>
                {errMsg && (
                  <Typography
                    component="p"
                    ref={errRef}
                    sx={{
                      fontFamily: `'Poppins', sans-serif`,
                      fontWeight: 600,
                      color: "red",
                      py: ".5rem",
                      fontSize: "1rem",
                      borderRadius: "5px",
                      border: `1px solid red`,
                    }}
                  >
                    {errMsg}
                  </Typography>
                )}
              </Stack>
            </form>
          </Stack>
        </>
      )}
    </>
  );
};

export default Login;
