import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Form from "./Form";

//рег новых пользователей

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/auth");
      })
      .catch(console.error);
  };
  return (
    <>
      <h1>createUser</h1>
      <div>
        <Form title="Вход для новых пользователей" handleClick={handleSignUp} />
      </div>
    </>
  );
}
export default SignUp;
