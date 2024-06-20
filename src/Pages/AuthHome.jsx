import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { getAuth } from "firebase/auth";

function AuthHome() {
  //узнаем авторизован ли пользователь
  const dispatch = useDispatch();
  const auth = getAuth();
  const user = auth.currentUser;
  const mail = {
    mail: user.email,
  };
  console.log(user);
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div>
      <h1>Welcome {mail.mail}</h1>
      <button onClick={() => dispatch(removeUser())}>log out</button>
    </div>
  ) : (
    <Link to="/login">Login</Link>
  );
}
export default AuthHome;
