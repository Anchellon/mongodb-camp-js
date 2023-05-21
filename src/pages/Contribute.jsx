import { useContext } from "react";
import ToolForm from "../components/ToolForm";
import { Button, Container } from "react-bootstrap";

import { UserContext } from "../components/UserContextProvider";

function Contribute() {
  const ctx = useContext(UserContext);
  return (
    <Container>
      <div>Contribute</div>
      {ctx.user == undefined && (
        <div>
          <h2> Please Login to contribute</h2>
          <Button>Login</Button>
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
