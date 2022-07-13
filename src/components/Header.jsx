import React from "react";
import {useNavigate} from 'react-router-dom';
import AddCategorieModal from "./AddCategorieModal";
import AddProductModal from "./AddProductModal";
const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("_id");
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  const name = localStorage.getItem("name");
  return (
    <div className="flex justify-between m-5">
      <div>
        <h1 className="text-center">{name}</h1>
      </div>
      <div>
        <div className="dropdown dropdown-hover">
          <label tabIndex="0" className="btn m-1">
            ADMINISTRAR
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <label htmlFor="my-modal-6" className=" modal-button">
                Agregar categoria
              </label>
            </li>
            <li>
              <label htmlFor="my-modal-5" className=" modal-button">
                Agregar producto
              </label>
            </li>
          </ul>
        </div>
        <button onClick={logout} className="ml-2 btn btn-error">SALIR</button>
      </div>



      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <label htmlFor="my-modal-6" className="modal cursor-pointer">
        <AddCategorieModal />
      </label>

      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <label htmlFor="my-modal-5" className="modal cursor-pointer">
        <AddProductModal />
      </label>
      
    </div>
    
  );
};
export default Header;
