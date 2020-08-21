import React from "react";
import { TypeCategories } from "./../constants/typeData";
import { createGlobalState } from "react-hooks-global-state";
import { TypeUser } from "@/constants/typeData";

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
