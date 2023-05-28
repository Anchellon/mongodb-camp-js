import { createContext } from "react";
const UserContext = createContext({
  user: {},
  setLanguage: () => {},
  isLoggedIn: false,
  setisLoggedIn: () => {},
});
export default UserContext;
