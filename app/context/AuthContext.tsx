"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: any;
  loading: boolean;
  login: (res: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const login = (res: any) => {
    const { access_token, refresh_token, user } = res;

    // Lưu vào LocalStorage để Client đọc nhanh
    localStorage.setItem("user_info", JSON.stringify(user));
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);

    setUser(user);
    router.push("/home");
  };

  const logout = () => {
    localStorage.removeItem("user_info");
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook để dùng Auth ở mọi nơi
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
