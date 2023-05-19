import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
const UserContext = createContext(null);
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const handleLogout = () => {
    setUser(null);
  };
  useEffect(() => {
    fetch("http://localhost:3000/getInfo", { withCredentials: true }).then(
      (res) => {
        console.log(res);
        if (res.data) {
          setUser(res.data);
          setIsAuth(true);
        }
      }
    );
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
