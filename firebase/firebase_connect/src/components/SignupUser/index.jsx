import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firbase/firebase";

const auth = getAuth(app);

const SignupUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = () =>
    createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((value) => alert("created user"));

  return (
    <div>
      <label htmlFor="">email</label>
      <input
        type="email"
        required
        placeholder="enter your email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <label htmlFor="">password</label>
      <input
        type="password"
        required
        placeholder="enter password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <button onClick={signupUser}>signUp</button>
    </div>
  );
};

export default SignupUser;
