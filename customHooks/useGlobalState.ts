import React from "react";
import { createGlobalState } from "react-hooks-global-state";

type TypeCurrentUser = {
  USERID: string;
  email: string;
  fullname: string;
  gender: string;
  description: string;
  profilepicture: string;
  status: string;
};

type TypeInitalState = {
  currentUser: TypeCurrentUser | null;
  token?: string | null;
  mode?: "light" | "dark";
};

const initialState: TypeInitalState = {
  currentUser: null,
  token: "",
  mode: "light",
};
const { useGlobalState } = createGlobalState(initialState);

export { useGlobalState };
