import { Outlet } from "react-router-dom";
import MongoNavBar from "../components/navbar";

function SharedLayout() {
  return (
    <>
      <MongoNavBar />
      <section>
        <Outlet />
      </section>
    </>
  );
}
export default SharedLayout;
