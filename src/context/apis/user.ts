import { retry } from "@reduxjs/toolkit/dist/query";

import { User } from "../@types";
import api from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation<User, Partial<User>>({
      query: (body) => ({ url: "signup", method: "POST", body }),
      extraOptions: {
        backoff: () => {
          // We intentionally error once on login, and this breaks out of retrying. The next login attempt will succeed.
          retry.fail({ fake: "error" });
        },
      },
    }),
    login: build.mutation<User, { email: string; password: string }>({
      query: (body) => ({ url: "login", method: "POST", body }),
      extraOptions: {
        backoff: () => {
          // We intentionally error once on login, and this breaks out of retrying. The next login attempt will succeed.
          retry.fail({ fake: "error" });
        },
      },
    }),
    getUser: build.query<User[], { id: string }>({
      query: (id) => ({ url: `user/${id}`, method: "GET" }),
    }),
    updateUser: build.mutation<User, Partial<User>>({
      query: ({ id, ...body }) => ({
        url: `update/${id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  endpoints: { login, signup },
  useGetUserQuery,
  useUpdateUserMutation,
} = userApi;
