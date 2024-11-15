import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Heading } from "../components/heading";
import { Input } from "../components/input";
import { Button } from "../components/button";

export default function Login() {
  const [prenom, setPrenom] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogin() {
    if (prenom !== "") {
      dispatch({
        type: "LOGIN",
        payload: prenom,
      });

      navigate("/");
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 flex flex-col justify-center items-center min-h-screen">
      <Heading>Connectez-vous</Heading>
      <Input
        className="mb-4"
        value={prenom}
        onChange={(event) => setPrenom(event.target.value)}
      />
      <Button onClick={handleLogin}>Connexion</Button>
    </div>
  );
}
