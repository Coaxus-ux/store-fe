import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Login = () => {
  const navigate = useNavigate();
  const { Validation, Login} = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    status: false,
    msg: "",
  });
  const onHandleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setError({
        error : false,
        msg : "",
    });
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    if (user.email === "" || user.password === "") {
      setError({
        status: true,
        msg: "Todos los campos son obligatorios",
      });
      return;
    }
   const validationsCreden = await Validation(user);
    if(!validationsCreden.email){
      setError({
        status: true,
        msg: "Email no valido",
      });
      return;
    }
    if(!validationsCreden.password){
      setError({
        status: true,
        msg: "Contraseña no valido",
      });
      return;
    }
    const login = await Login(user);
    console.log(login);
    if(!login.state){
      setError({
        status: true,
        msg: login.msg,
      });
      return;
    }
    // local storage
    localStorage.setItem("token", login.token);
    localStorage.setItem("_id", login._id);
    localStorage.setItem("name", login.name);
    navigate("/categories");

  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 grid-flow-row w-auto h-screen">
      <div className="bg-[#457B9D] hidden lg:block"></div>

      <div className=" flex gap-10 flex-col mx-auto col-span-1 md:col-span-2 content-center justify-center md:w-5/12 w-9/12">
        <div>
          <p className="text-center text-5xl mb-5 font-bold ">
            INICIO DE SESIÓN
          </p>
        </div>
        {error.status && (
          <div className="bg-rose-500 uppercase flex items-center justify-center font-semibold rounded-lg mx-6 my-7 h-12 text-center shadow-lg ">
            {error.msg}
          </div>
        )}

        <form onChange={onHandleChange}>
          <div className="w-full flex flex-col justify-center gap-2 mb-5">
            <label
              htmlFor="emailInput"
              className="text-md ml-2 font-semibold  leading-5"
            >
              Email
            </label>
            <input
              id="emailInput"
              type="email"
              name="email"
              placeholder="ejemplo@mail.com"
              className="input input-ghost w-full"
            />
          </div>
          <div className="w-full gap-2 flex flex-col justify-center">
            <label
              htmlFor="passwordInput"
              className="text-md ml-2 font-semibold  leading-5"
            >
              Contaseña
            </label>
            <input
              id="passwordInput"
              type="password"
              placeholder="Contraseña"
              name="password"
              className="input input-ghost w-full"
            />
          </div>

          <a
            href="/register"
            className="text-sm text-blue-500 ml-auto hover:text-blue-600"
          >
            Olvidé mi Contraseña
          </a>

          <div className="flex flex-col mx-auto  content-center justify-center w-8/12  mt-5">
            <button
              onClick={onHandleSubmit}
              className="btn btn-outline btn-success mb-2"
              type="button"
            >
              Iniciar sesión
            </button>
            <a className="btn btn-outline btn-warning" href="/register">
              Registrarme
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
