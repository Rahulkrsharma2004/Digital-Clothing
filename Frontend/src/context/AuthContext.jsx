import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
//   const [organizer, setOrganizer] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
//   const [userID, setUserID] = useState("");
//   const [organizerID, setOrganizerID] = useState("");
  const [userName,setUserName] = useState("");
  const [adminName,setAdminName] = useState("");


  useEffect(() => {
    // const storedOrganizer = localStorage.getItem("organizer") === "true";
    const storedIsUserLoggedIn = localStorage.getItem("isUserLoggedIn") === "true";
    const storedIsAdminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
    // const storedUserID = localStorage.getItem("userID") || "";
    // const storedOrganizerID = localStorage.getItem("organizerID") || "";
    const storedUserName = localStorage.getItem("userName") || "";
    const storedAdminName = localStorage.getItem("adminName") || "";
    // setAdmin(storedAdmin);
    setIsUserLoggedIn(storedIsUserLoggedIn);
    setIsAdminLoggedIn(storedIsAdminLoggedIn);
    // setUserID(storedUserID);
    // setAdminID(storedAdminID);
    setUserName(storedUserName);
    setAdminName(storedAdminName);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        // userID,
        userName,
        // organizer,
        // setUserID,
        setUserName,
        // organizerID,
        // setOrganizer,
        adminName,
        isUserLoggedIn,
        // setOrganizerID,
        setAdminName,
        setIsUserLoggedIn,
        isAdminLoggedIn,
        setIsAdminLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
