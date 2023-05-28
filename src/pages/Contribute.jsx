import UserContext from "../utils/userContext";
import ToolForm from "../components/ToolForm";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";

function Contribute() {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <Container>
      <div>Contribute</div>
      {!isLoggedIn && (
        <div>
          <h2> Please Login to contribute</h2>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      )}
      {isLoggedIn && (
        <div>
          <ToolForm></ToolForm>
        </div>
      )}
    </Container>
  );
}
export default Contribute;
