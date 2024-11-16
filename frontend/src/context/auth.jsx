import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setupUser(token);
    } else {
      setLoading(false);
    }
  }, []);

  const setupUser = async (token) => {
    try {
      // Set default authorization header
      axios.defaults.headers.common["token"] = token;
      // You'll need to create an endpoint to get user data
      const response = await axios.get("/api/users/me");
      setUser(response.data);
    } catch (error) {
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["token"];
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (userData) => {
    try {
      const response = await axios.post("/api/users/login", userData);
      const { token } = response.data;
      localStorage.setItem("token", token);
      await setupUser(token);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Login failed",
      };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["token"];
  };

  const register = async (userData) => {
    try {
      const response = await axios.post("/api/users/register", userData);
      const { token } = response.data;
      localStorage.setItem("token", token);
      await setupUser(token);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Registration failed",
      };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        loading,
        isAuthenticated: !!user,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
