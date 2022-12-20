import { apiSlice } from "../../app/api/apiSlice";
export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts",
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetPostsQuery } = postsApiSlice;
