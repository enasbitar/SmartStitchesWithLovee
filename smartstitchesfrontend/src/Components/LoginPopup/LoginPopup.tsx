import React from "react";

type LoginButtonProp = {
  username: string;
  password: string;
  closePopup: any;
};

const LoginButton: React.FunctionComponent<{}> = (props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
      if (data.success) {
        // login successful, do something here (e.g., redirect to another page)
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </>
  );
};

export default LoginButton;
