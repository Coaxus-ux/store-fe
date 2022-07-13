import useProducts from "../hooks/useProduct";
import { AiFillEdit } from "react-icons/ai";
import UpdateProductModal from "./UpdateProductModal";
const CardProducts = ({ products }) => {
  const modalupdate = document.getElementById("modalupdate");
  const { DeleteProduct, setToUpdateProduct } = useProducts();
  const onHandleDelete = async () => {
    const productRes = await DeleteProduct(products);
    console.log(productRes);
    console.log(products._id);
  };
  const onHandleUpdate = () => {
    setToUpdateProduct({
      name: products.name,
      description: products.description,
      _id: products._id,
      price: products.price,
      category: products.category

    });
    console.log(products);

    modalupdate.click();
  };

  return (
    <div className="card w-96 bg-primary text-primary-content shadow-xl m-3">
      <div className="card-body">
        <h2 className="card-title">
          {products.name}{" "}
          <button onClick={onHandleUpdate} className="text-green-600 underline">
            <AiFillEdit />
          </button>
        </h2>
        <p>{products.description}</p>
        <p className="font-bold">Precio: ${products.price}</p>
        <div className="card-actions justify-start">
          <button
            onClick={onHandleDelete}
            className="btn btn-error mr-1 w-full"
          >
            Eliminar
          </button>
        </div>
      </div>
      <label
        id="modalupdate"
        for="my-modal-9"
        class="btn modal-button hidden"
      ></label>

      <input type="checkbox" id="my-modal-9" class="modal-toggle" />
      <label for="my-modal-9" class="modal cursor-pointer">
        <UpdateProductModal />
      </label>
    </div>
  );
};
export default CardProducts;
