import React from "react";
import { useNavigate } from "react-router-dom";
const CardCategories = ({ product }) => {
  const navigate = useNavigate();
  const OnHandleClick = () => {
    console.log(product);
    navigate(`/products/${product.id}`);
  }
  return (
    <>
        <div className="card card-compact w-96  bg-base-100  shadow-xl m-3">
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              <div className="card-actions justify-end flex flex-col">
                <button onClick={OnHandleClick} className="btn btn-primary w-full">Ver productos</button>
              </div>
            </div>
          </div>
    </>
  );
};
export default CardCategories;
