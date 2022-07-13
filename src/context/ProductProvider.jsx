import { createContext, useState } from "react";
import axios from "axios";
const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [toUpdateProduct, setToUpdateProduct] = useState({
    _id: "",
    name: "",
    description: "",
    price: "",
    category: "",

  });
  const API = `${process.env.REACT_APP_URL_KEY}product/`;
  const userID = localStorage.getItem("_id");
  const GetProducts = async (category) => {

    const res = await axios({
      method: "POST",
      url: `${API}get`,
      data: {
        userOwner: userID,
        category: category,
      },
    })
    setProducts(res.data.products);
  };
  const AddProduct = async (product) => {
    const res = await axios({
      method: "POST",
      url: `${API}add`,
      data: {
        name: product.name,
        description: product.description,
        userOwner: userID,
        category: product.category,
        price: product.price,
      },
    });
    return res.data;
  }
  const UpdateProduct = async (product) => {
    const res = await axios({
      method: "PUT",
      url: `${API}update`,
      data: {
        userOwner: userID,
        name: product.name,
        description: product.description,
        category: product.category,
        price: product.price,
        _id: product._id,
      },
    });
    GetProducts(product.category);
    return res.data;
  }
  const DeleteProduct = async (product) => {
    console.log(product.category);
    const res = await axios({
      method: "DELETE",
      url: `${API}delete`,
      data: {
        userOwner: userID,
        _id: product._id,
      },
    });

    GetProducts(product.category);

    return res.data;
  }
  return (
    <ProductContext.Provider
      value={{
        products,
        GetProducts,
        DeleteProduct,
        AddProduct,
        UpdateProduct,
        toUpdateProduct,
        setToUpdateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export { ProductProvider };
export default ProductContext;
