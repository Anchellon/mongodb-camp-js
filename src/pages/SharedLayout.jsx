import { Outlet } from "react-router-dom";

import { useLoaderData } from "react-router";
import MongoNavBar from "../components/navbar";
import config from "../config";
import { useState } from "react";
import UserContext from "../utils/userContext";
export async function loader() {
  console.log("i have been called");
  const res = await fetch(config.backend_endpoint + "/users/getInfo", {
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  // if (!res.ok) {
  //   throw {
  //     message: "Failed to fetch user",
  //     statusText: res.statusText,
  //     status: res.status,
  //   };
  // }

  const user = await res.json();
  return user;
}

function SharedLayout() {
  const currUser = useLoaderData();
  let currLoginState = false;
  if (Object.keys(currUser).length !== 0) {
    currLoginState = true;
  }
  // const { user, setUser, isLoggedin, setIsLoggedIn }
  // setUser(currUser);
  const [user, setUser] = useState(currUser);
  const [isLoggedIn, setIsLoggedIn] = useState(currLoginState);
  const value = { user, setUser, isLoggedIn, setIsLoggedIn };
  console.log("Im using context");

  // if (currUser !== {}) {
  //   setIsLoggedIn(true);
  // }
  return (
    <UserContext.Provider value={value}>
      <MongoNavBar />
      <section>
        <Outlet />
      </section>
    </UserContext.Provider>
  );
}
export default SharedLayout;
