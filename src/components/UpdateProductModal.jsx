import { useState, useEffect  } from "react";
import useProduct from "../hooks/useProduct";
import useCategory from "../hooks/useCategory";

const UpdateCategorieModal = () => {
  const closeButton = document.getElementById("closeButton");
  const { GetCategories, categories } = useCategory();
  const { toUpdateProduct, setToUpdateProduct, UpdateProduct } = useProduct();
  
  const [error, setError] = useState({
    status: false,
    msg: "",
  });
  const [success, setSuccess] = useState(false);
  const [product, setProduct] = useState({
    _id: "",
    name: "",
    description: "",
    price: "",
    category: "",
  });
  console.log("product", toUpdateProduct);
  useEffect(() => {
    GetCategories();
    setProduct({
        _id: toUpdateProduct._id,
        name: toUpdateProduct.name,
        description: toUpdateProduct.description,
        price: toUpdateProduct.price,
        category: toUpdateProduct.category,

    });
  }, [toUpdateProduct]);
  const { name, description, price } = product;
  console.log(product);
  const OnHandleChange = (e) => {
    setProduct({
      ...product,
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
    if (product.name === "" || product.description === "") {
      setError({
        status: true,
        msg: "Todos los campos son obligatorios",
      });
      return;
    }

    const categoryRes = await UpdateProduct(product);

    if (categoryRes.state) {
      setSuccess(true);
      setProduct({
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
          name="name"
          placeholder="Nombre del producto"
          value={name}
          className="input input-bordered input-info w-full mb-5"
        />
        <input
          type="text"
          name="description"
          value={description}
          placeholder="Descripción del producto"
          className="input input-bordered input-info w-full mb-5"
        />
        <input
          type="number"
          placeholder="precio del producto"
          min={0}
          name="price"
          value={price}
          className="input input-bordered input-info w-full mb-5"
        />
        <select name="category" className="select select-bordered w-full ">
          <option defaultValue>
            Selecciona una categoria
          </option>
          {categories &&
            categories.map((category) => (
              <option key={category._id} value={category._id} name="category">
                {category.name}
              </option>
            ))}
        </select>
        <div className="modal-action">
          <button onClick={OnHandleSubmit} className="btn btn-success">
            Agregar
          </button>
          <label
            htmlFor="my-modal-9"
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
