import React from "react";
import { createGlobalState } from "react-hooks-global-state";

export type TypeUser = {
  USERID: string;
  email: string;
  fullname: string;
  gender: string;
  description: string;
  profilepicture: string;
  status: string;
  profileviews?: string;
  youviewed?: string;
  yourviewed?: string;
};

type TypeCategories = {
  id: string;
  text: string;
};

type TypeInitalState = {
  currentUser: TypeUser | null;
  categories: TypeCategories[] | [];
  token?: string | null;
  mode?: "light" | "dark";
};

const initialState: TypeInitalState = {
  currentUser: null,
  categories: [],
  token: "",
  mode: "light",
};
const { useGlobalState } = createGlobalState(initialState);

export { useGlobalState };
