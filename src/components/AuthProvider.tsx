import React from "react";

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
  };

  const logout = () => {
    setState({ status: "loggedOut" });
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
