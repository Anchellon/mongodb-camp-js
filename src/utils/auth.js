import { redirect } from "react-router-dom/dist";
import config from "../config";
export async function requiredAuth() {
  fetch(config.backend_endpoint + "/users/getInfo", {
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        //   console.log(data);
        return data;
      } else {
        console.log("no data");
        redirect("/login");
      }
    });
}
