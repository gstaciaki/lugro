import { createContext, ReactNode, useContext } from "react";

export interface AuthContextProps {
  token: number,
  setToken: Function;
}

export const AuthContext = createContext<AuthContextProps>({
  token: 0,
  setToken: () => {}
});
