import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";

//вход существующих  пользователей
function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const hahdelLogin = (email, password) => {
    //вызов этой функции даст доступ к данным полученным из формы
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      );
    });
    navigate("/register").catch(console.error);
  };
  return (
    <>
      <div>
        <Form title="вход для существующих" handleClick={hahdelLogin} />
      </div>
    </>
  );
}
export default Login;
