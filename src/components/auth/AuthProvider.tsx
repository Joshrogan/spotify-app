import React from "react";
import axios from "axios";

export type AuthContextType = {
  login: (accessToken: string) => void;
  logout: () => void;
} & AuthContextState;

type AuthContextState = {
  status: "loggedOut" | "loggedIn";
  accessToken?: string;
};

// eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
export const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider(props: { children: React.ReactNode }) {
  const [state, setState] = React.useState<AuthContextState>({
    status: "loggedOut",
  });

  const login = (accessToken: string) => {
    setState({ status: "loggedIn", accessToken });
    axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
    history.replaceState &&
      history.replaceState(
        null,
        "",
        location.pathname +
          location.search.replace(/[?&]code=[^&]+/, "").replace(/^&/, "?")
      );
  };

  const logout = () => {
    setState({ status: "loggedOut" });
    delete axios.defaults.headers.common["Authorization"];
  };

  const contextValue = React.useMemo(
    () => ({
      ...state,
      login,
      logout,
    }),
    [state]
  );

  return (
    <AuthContext.Provider value={contextValue} children={props.children} />
  );
}
