import Main from "@pages/Main";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    index: true,
    element: <Main />,
  },
];
