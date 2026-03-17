import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const me = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}/auth/me`, {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();

        if (response.ok) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        setIsAdmin(false);
      }
    };
    me();
  }, [isAdmin]);

  if (isAdmin === true) return children;
  if (isAdmin === false) return <Navigate to="/auth/login" />;
};

export default AdminRoute;
