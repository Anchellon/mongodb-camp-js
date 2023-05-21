import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
const UserContext = createContext(null);
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const handleLogout = () => {
    setUser(null);
  };
  useEffect(function () {
    fetch("http://localhost:3000/users/getInfo", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setUser(data);
          //   console.log(data);
        } else {
          console.log("no data");
        }
      });
  }, []);
  const value = {
    user,
    setUser,
    isAuth,
    setIsAuth,
    handleLogout,
  };

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};
UserContextProvider.propTypes = {
  children: PropTypes.node,
};
export { UserContext, UserContextProvider };
