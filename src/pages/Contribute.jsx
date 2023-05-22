import { useContext } from "react";
import ToolForm from "../components/ToolForm";
import { Button, Container } from "react-bootstrap";

import { UserContext } from "../components/UserContextProvider";
import { Link } from "react-router-dom";

function Contribute() {
  const ctx = useContext(UserContext);
  return (
    <Container>
      <div>Contribute</div>
      {ctx.user == undefined && (
        <div>
          <h2> Please Login to contribute</h2>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      )}
      {ctx.user && (
        <div>
          <ToolForm></ToolForm>
        </div>
      )}
    </Container>
  );
}
export default Contribute;
