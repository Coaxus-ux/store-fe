import { useState } from "react";
import useCategory from "../hooks/useCategory";
const AddCategorieModal = ({}) => {
  const { AddCategory } = useCategory();
  const [error, setError] = useState({
    status: false,
    msg: "",
  });
  const [success, setSuccess] = useState(false);

  const [category, setCategory] = useState({
    name: "",
    description: "",
  });
  const { name, description } = category;
  const OnHandleChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
    setError({
      error: false,
      msg: "",
    });
    setSuccess(false);
  };
  
  const OnHandleSubmit = async (e) => {
    e.preventDefault();
    if (category.name === "" || category.description === "") {
      setError({
        status: true,
        msg: "Todos los campos son obligatorios",
      });
      return;
    }

    const categoryRes = await AddCategory(category);

    if (categoryRes.state) {
      setSuccess(true);
      setCategory({
        name: "",
        description: "",
      });
      setTimeout(() => {

      setSuccess(false);
      }, 2000);
    } else {
      setError({
        status: true,
        msg: categoryRes.msg,
      });
    }
  };
  
  return (
    <label className="modal-box relative" htmlFor="">
      <h3 className="font-bold text-lg p-2">Agregar categoria</h3>

      {error.status && (
        <div className="alert alert-error shadow-lg my-4 ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error.msg}</span>
          </div>
        </div>
      )}

      {success && (
        <div className="alert alert-success shadow-lg my-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>La categoria se agrego correctamente</span>
          </div>
        </div>
      )}

      <form 
        onChange={OnHandleChange}
      >
        <input
          type="text"
          placeholder="Nombre de la categoria"
          name="name"
          value={name}
          className="input input-bordered input-info w-full mb-5"
        />
        <input
          type="text"
          placeholder="Descripci??n de la categoria"
          name="description"
          value={description}
          className="input input-bordered input-info w-full"
        />
        <div className="modal-action">
          <button onClick={OnHandleSubmit} className="btn btn-success">
            Agregar
          </button>
          <label
            id="cancelLabel"
            htmlFor="my-modal-6"
            className="btn btn-error"
          >
            Cancelar
          </label>
        </div>
      </form>
    </label>
  );
};
export default AddCategorieModal;
