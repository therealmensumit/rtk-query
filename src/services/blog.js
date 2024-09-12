import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BLOG_API }),
  endpoints: (builder) => ({
    // fetch all blog data
    getBlog: builder.query({
      query: () => "/api/articles",
    }),

    // fetch all blog data
    getBlogById: builder.query({
      query: (id) => `/api/articles/${id}`,
    }),
  }),
});

export const { useGetBlogQuery, useGetBlogByIdQuery } = blogApi;
