import React from "react";
import AddCategorieModal from "./AddCategorieModal";
import AddProductModal from "./AddProductModal";
const Header = () => {

  return (
    <div className="flex justify-between m-5">
      <div>
        <h1 className="text-center">JULIAN MARINO TRUJILLO</h1>
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
        <button className="ml-2 btn btn-error">SALIR</button>
      </div>



      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <AddCategorieModal />
      </div>

      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <AddProductModal />
      </div>
    </div>
  );
};
export default Header;
