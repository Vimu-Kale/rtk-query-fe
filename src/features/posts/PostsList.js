import { Box, Stack, Typography, Button } from "@mui/material";
import { padding } from "@mui/system";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetPostsQuery } from "./postsApiSlice";

const PostsList = () => {
  const navigate = useNavigate();
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  return (
    <>
      <Stack spacing={3}>
        {isLoading && <Typography component="h1">Loading...</Typography>}
        {isSuccess && (
          <>
            <Stack spacing={3}>
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: "3rem",
                }}
              >
                User Posts
              </Typography>

              {posts.map((post, i) => {
                return (
                  <Box
                    key={i}
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "1rem",
                      fontWeight: "600",
                      border: `3px solid #4285F4`,
                      borderRadius: "25px",
                      py: ".5rem",
                      px: "1rem",
                      textTransform: "capitalize",
                    }}
                  >
                    {post.title}
                  </Box>
                );
              })}
            </Stack>
          </>
        )}
        {isError && <Typography>{JSON.stringify(error)}</Typography>}
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
            navigate("/welcome");
          }}
        >
          Back to Welcome
        </Button>
      </Stack>
    </>
  );
};

export default PostsList;
