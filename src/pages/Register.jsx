import React from "react";
const Register = () => {
    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 grid-flow-row w-auto h-screen"
        >
            <div className="bg-[#F05D5E] hidden lg:block">

            </div>
            <div
                className=" flex flex-col mx-auto col-span-1 md:col-span-2  content-center justify-center  w-9/12"
            >

                <p className="text-center text-5xl my-12 font-bold ">
                    REGISTRO
                </p>
                <div
                    className="bg-rose-500 uppercase flex items-center justify-center font-semibold rounded-lg mx-6 my-7 h-12 text-center"
                >
                </div>

                <div
                    className="block gap-10 lg:flex justify-between focus-within:ring-blue-400"
                >
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
                            placeholder="Apellido"
                            className="input input-ghost w-full"
                        />
                    </div>
                </div>
                <div
                    className="w-full flex flex-col justify-center mt-3 focus-within:ring-blue-400 "
                >
                    <label
                        htmlFor="emailInput"
                        className="text-md font-semibold leading-5 "
                    >
                        Email
                    </label>
                    <input
                        id="emailInput"
                        type="text"
                        placeholder="ejemplo@mail.com"
                        className="input input-ghost w-full"
                    />
                </div>
                <div
                    className="block gap-10 lg:flex justify-between mt-3 focus-within:ring-blue-400"
                >
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
                            placeholder="Contraseña"
                            className="input input-ghost w-full"
                        />
                    </div>
                </div>
                <div
                    className="mt-8 flex flex-col mx-auto  content-center justify-center w-8/12 "
                >
                    <button
                        className="btn btn-outline btn-success mb-2"
                        type="button"
                    >
                        Registrarme
                    </button>
                    <a
                        className="btn btn-outline btn-warning"
                        href="/"
                    >
                        Iniciar Sesion
                    </a>
                </div>
            </div>
        </div>

    );
}
export default Register;