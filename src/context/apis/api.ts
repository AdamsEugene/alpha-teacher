import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "/",
  prepareHeaders(headers, { getState }) {
    const token = (getState() as RootState).user.token;
    if (token) headers.set("authentication", `Bearer ${token}`);
    return headers;
  },
  cache: "default",
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 5 });

const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["User", "School", "Student"],
  endpoints: () => ({}),
});

const enhancedAPI = api.enhanceEndpoints({
  endpoints: () => ({
    getPost: () => "test",
  }),
});
export default enhancedAPI;
