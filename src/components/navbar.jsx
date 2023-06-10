import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useContext } from "react";
import UserContext from "../utils/userContext";
import config from "../config";
function MongoNavBar() {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  console.log("I am user");
  console.log(isLoggedIn);
  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
    fetch(config.backend_endpoint + "/logout", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          // delete_cookie("connect.sid");
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
            {!isLoggedIn && (
              <NavLink
                to="login"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Login
              </NavLink>
            )}

            {isLoggedIn && (
              <NavDropdown title={user.firstName} id="collasible-nav-dropdown">
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
