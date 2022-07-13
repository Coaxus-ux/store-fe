import { useState } from "react";
import useAuth from "../hooks/useAuth";
import SuccessfulModal from "../components/SuccessfulModal";
const Register = () => {
  const { Validation, Register } = useAuth();
  const reactModel = document.getElementById("modalreact");
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    status: false,
    msg: "",
  });
  const OnHandleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const OnHandleSubmit = async (e) => {
    e.preventDefault();
    if (
      user.name === "" ||
      user.lastName === "" ||
      user.email === "" ||
      user.password === "" ||
      user.confirmPassword === ""
    ) {
      setError({
        status: true,
        msg: "Todos los campos son obligatorios",
      });
      return;
    }
    if (user.password !== user.confirmPassword) {
      setError({
        status: true,
        msg: "Las contraseñas no coinciden",
      });
      return;
    }
    const validationsCreden = await Validation(user);
    if (!validationsCreden.email) {
      setError({
        status: true,
        msg: "Email no valido",
      });
      return;
    }
    if (!validationsCreden.password) {
      setError({
        status: true,
        msg: "Contraseña no valido",
      });
      return;
    }
    const register = await Register(user);
    console.log(register);
    if (!register.state) {
      setError({
        status: true,
        msg: register.msg,
      });
      return;
    }
    reactModel.click();
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 grid-flow-row w-auto h-screen">
      <div className="bg-[#F05D5E] hidden lg:block"></div>
      <div className=" flex flex-col mx-auto col-span-1 md:col-span-2  content-center justify-center  w-9/12">
        <p className="text-center text-5xl my-12 font-bold ">REGISTRO</p>
        {error.status && (
          <div className="bg-rose-500 uppercase flex items-center justify-center font-semibold rounded-lg mx-6 my-7 h-12 text-center shadow-lg ">
            {error.msg}
          </div>
        )}
        <form onChange={OnHandleChange}>
          <div className="block gap-10 lg:flex justify-between focus-within:ring-blue-400">
            <div className="flex-col flex flex-1 gap-2">
              <label
                htmlFor="nameInput"
                className="text-md font-semibold  leading-5 "
              >
                Nombre
              </label>
              <input
                id="nameInput"
                type="text"
                name="name"
                placeholder="Nombre"
                className="input input-ghost w-full"
              />
            </div>
            <div className="flex-col flex flex-1 gap-2">
              <label
                htmlFor="lastNameInput"
                className="text-md font-semibold  leading-5 "
              >
                Apellido
              </label>
              <input
                id="lastNameInput"
                type="text"
                name="lastName"
                placeholder="Apellido"
                className="input input-ghost w-full"
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center mt-3 focus-within:ring-blue-400 ">
            <label
              htmlFor="emailInput"
              className="text-md font-semibold leading-5 "
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
          <div className="block gap-10 lg:flex justify-between mt-3 focus-within:ring-blue-400">
            <div className="flex-col flex flex-1 gap-2">
              <label
                htmlFor="password"
                className="text-md font-semibold leading-5 "
              >
                Digite su contraseña
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Contraseña"
                className="input input-ghost w-full"
              />
            </div>
            <div className="flex-col flex flex-1 gap-2">
              <label
                htmlFor="confirmPasswordInput"
                className="text-md font-semibold  leading-5 "
              >
                Confirme su contraseña
              </label>
              <input
                id="confirmPasswordInput"
                type="password"
                name="confirmPassword"
                placeholder="Contraseña"
                className="input input-ghost w-full"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col mx-auto  content-center justify-center w-8/12 ">
            <button
              className="btn btn-outline btn-success mb-2"
              type="button"
              onClick={OnHandleSubmit}
            >

              Registrarme
            </button>

            <label id="modalreact" htmlFor="my-modal" className="btn modal-button hidden">open modal</label>

            <a className="btn btn-outline btn-warning" href="/">
              Iniciar Sesion
            </a>
          </div>
        </form>
      </div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
       
            <SuccessfulModal />

      </div>
    </div>
  );
};
export default Register;
