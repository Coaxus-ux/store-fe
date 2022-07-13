import { createContext, useState, useEffect } from "react";
import axios from "axios";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {

  const Login = async (userCredencials) => {
    console.log("llegue aca");
    const res = await axios
      .post("http://localhost:4000/api/user/login", userCredencials)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });
    return res;
  };
  const Register = async (userCredencials) => {
    const res = await axios
      .post("http://localhost:4000/api/user/register", userCredencials)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });
    return res;
  }
  const Validation = (user) => {
    console.log(user);
    const { email, password } = user;
    const emailRegex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const passwordRegex = /^(?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20}/;
    return {
      email: emailRegex.test(email),
      password: passwordRegex.test(password),
    };
  };
  return (
    <AuthContext.Provider
      value={{

        Login,
        Validation,
        Register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };
export default AuthContext;
