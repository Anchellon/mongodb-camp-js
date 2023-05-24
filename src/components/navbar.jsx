import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { UserContext } from "./UserContextProvider";
import { NavDropdown } from "react-bootstrap";
import config from "../config";
function MongoNavBar() {
  const ctx = useContext(UserContext);
  function delete_cookie(name, path, domain) {
    if (get_cookie(name)) {
      document.cookie =
        name +
        "=" +
        (path ? ";path=" + path : "") +
        (domain ? ";domain=" + domain : "") +
        ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
  }
  function get_cookie(name) {
    return document.cookie.split(";").some((c) => {
      return c.trim().startsWith(name + "=");
    });
  }
  const logout = () => {
    fetch(config.backend_endpoint + "/logout", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          delete_cookie("connect.sid");
          window.location.href = "/";
        } else {
          console.log("no data");
        }
      });
  };
  return (
    <Navbar bg="light" expand="lg" className="nav-bar-css">
      <Container>
        <Navbar.Brand href="#home">
          <img
            id="mongo-my-logo"
            src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress"
            alt="MongoDB logo"
            // style={{ height: "50px"}}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="ms-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="contribute"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contribute
            </NavLink>
            {ctx.user == undefined && (
              <NavLink
                to="login"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Login
              </NavLink>
            )}

            {ctx.user && (
              <NavDropdown
                title={ctx.user.firstName}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>Profile Info</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MongoNavBar;
