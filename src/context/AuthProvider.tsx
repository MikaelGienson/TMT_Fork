import React, { createContext, useState, useEffect } from "react";
import tests from "../tests";
import { v4 as uuid } from "uuid";

export type AuthUser = {
  name: string
  email: string
}

const AuthContext = createContext(null);

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
