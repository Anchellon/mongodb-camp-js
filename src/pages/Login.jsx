export default function Login() {
  const googleLogin = () => {
    window.open("http://localhost:3000/users/auth/google", "_self");
  };

  const githubLogin = () => {
    window.open("http://localhost:3000/users/auth/github", "_self");
  };
  return (
    <div>
      <div>
        <h1>Login</h1>
        <div onClick={googleLogin}>
          <button>Login with Google</button>
        </div>

        <div onClick={githubLogin}>
          <button>Login With Github</button>
        </div>
      </div>
    </div>
  );
}
