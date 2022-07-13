import { useNavigate } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import { AiFillEdit } from "react-icons/ai";
import UpdateCategorieModal from "./UpdateCategorieModal";
const CardCategories = ({ category }) => {
  const modalupdate = document.getElementById("modalupdate");
  const { DeleteCategory, setToUpdate } = useCategory();
  const navigate = useNavigate();
  const OnHandleClickAdd = () => {
    navigate(`/products/${category._id}`);
  };
  const OnHandleClickDelete = () => {
    DeleteCategory(category);
  };
  const OnHandleClickEdit = () => {
    setToUpdate({ name: "", description: "", _id: "" });
    setToUpdate(category);
    modalupdate.click();
  };
  return (
    <>
      <div className="card card-compact w-96  bg-base-100  shadow-xl m-3">
        <div className="card-body">
          <h2 className="card-title">
            {category.name}
            <button
              onClick={OnHandleClickEdit}
              className="text-green-600 underline"
            >
              <AiFillEdit />
            </button>
          </h2>
          <p>{category.description}</p>
          <div className="card-actions justify-end flex flex-col">
            <div className="flex ">
              <button
                onClick={OnHandleClickDelete}
                className="btn btn-error mr-1"
              >
                Eliminar
              </button>
              <button
                onClick={OnHandleClickAdd}
                className="btn btn-primary w-full"
              >
                Ver productos
              </button>
            </div>
          </div>
        </div>
      </div>
      <label
        id="modalupdate"
        for="my-modal-4"
        class="btn modal-button hidden"
      ></label>

      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <UpdateCategorieModal />
      </label>
    </>
  );
};
export default CardCategories;
