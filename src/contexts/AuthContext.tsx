import { createContext, useCallback } from "react";
import api from "../services/api";

interface AuthContextState {
  token: string;
  signIn({ username, password }: UserData): Promise<void>;
}

interface UserData {
  username: string;
  password: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ username, password }: UserData) => {
    const response = await api.post("/sessions", {
      username,
      password,
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ token: "9840834092439", signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
