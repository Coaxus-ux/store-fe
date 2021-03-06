import { useState, useEffect } from "react";
import useCategory from "../hooks/useCategory";
import useProduct from "../hooks/useProduct";
const AddProductModal = (props) => {
  const { GetCategories, categories } = useCategory();
  const { AddProduct } = useProduct();
  const [success, setSuccess] = useState(false);
  const [product , setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });
  const [error, setError] = useState({
    status: false,
    msg: "",
  });
  useEffect(() => {
    GetCategories();
  }, []);

  const onHandleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    setError({
      status: false,
      msg: "",
    });
    setSuccess(false);
  }
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);
    if (product.name === "" || product.description === "" || product.price === "" || product.category === "") {
      setError({
        status: true,
        msg: "Todos los campos son obligatorios",
      });
      return;
    }
    console.log("product");
    const productRes = await AddProduct(product);
    console.log(productRes);
    if (productRes.state) {
      setProduct({
        name: "",
        description: "",
        price: "",
        category: "",
      });
      setError({
        status: false,
        msg: "",
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }
        , 2000);

    } else {
      setError({
        status: true,
        msg: productRes.msg,
      });
    }
  }
  return (
    <div className="modal-box">
      <h3 className="font-bold text-lg p-2">Agregar producto</h3>
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
        onChange={onHandleChange}
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          className="input input-bordered input-info w-full mb-5"
        />
        <input
          type="text"
          name="description"
          placeholder="Descripci??n del producto"
          className="input input-bordered input-info w-full mb-5"
        />
        <input
          type="number"
          placeholder="precio del producto"
          min={0}
          name="price"
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
          <button onClick={onHandleSubmit} className="btn btn-success">Agregar</button>
          <label htmlFor="my-modal-5" className="btn">
            Cancelar
          </label>
        </div>
      </form>
    </div>
  );
};
export default AddProductModal;
