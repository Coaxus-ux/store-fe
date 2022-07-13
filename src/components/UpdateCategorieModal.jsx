import { useState, useEffect  } from "react";
import useCategory from "../hooks/useCategory";
const UpdateCategorieModal = () => {
    const closeButton = document.getElementById("closeButton");
  const { UpdateCategory, toUpdate } = useCategory();
  const [error, setError] = useState({
    status: false,
    msg: "",
  });
  const [success, setSuccess] = useState(false);
  const [category, setCategory] = useState({
    _id: "",
    name: "",
    description: "",
  });
  useEffect(() => {
    setCategory({
        _id: toUpdate._id,
        name: toUpdate.name,
        description: toUpdate.description,
    });
  }, [toUpdate]);
  
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

    const categoryRes = await UpdateCategory(category);

    if (categoryRes.state) {
      setSuccess(true);
      setCategory({
        name: "",
        description: "",
      });
      
      closeButton.click();
      setSuccess(false);
    } else {
      setError({
        status: true,
        msg: categoryRes.msg,
      });
    }
  };
  
  return (
    <label class="modal-box relative" for="">
      <h3 class="font-bold text-lg p-2">Editar categoria</h3>

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
            <span>La categoria se edito correctamente</span>
          </div>
        </div>
      )}
      
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
          placeholder="Descripción de la categoria"
          name="description"
          value={description}
          className="input input-bordered input-info w-full"
        />
        <div className="modal-action">
          <button onClick={OnHandleSubmit} className="btn btn-success">
            Agregar
          </button>
          <label
            htmlFor="my-modal-4"
            id="closeButton"
            className="btn btn-error"
          >
            Cancelar
          </label>
        </div>
      </form>
    </label>
  );
};
export default UpdateCategorieModal;
