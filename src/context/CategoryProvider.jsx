import { createContext, useState } from "react";
import axios from "axios";

const CategoryContext = createContext();
const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [categoriesState, setCategoriesState] = useState(false);
  const userID = localStorage.getItem("_id");
  const API = `${process.env.REACT_APP_URL_KEY}category/`;
  const [toUpdate, setToUpdate] = useState({
    _id: "",
    name: "",
    description: "",
  });
  
  const GetCategories = async () => {
    const res = await axios({
      method: "POST",
      url: `${API}get`,
      data: {
        userOwner: userID,
      },
    });
    setCategoriesState(res.data.state);
    setCategories(res.data.categories);
  };
  const AddCategory = async (category) => {
    const res = await axios({
      method: "POST",
      url: `${API}add`,
      data: {
        name: category.name,
        description: category.description,
        userOwner: userID,
      },
    });
    GetCategories();
    return res.data;
  };
  const DeleteCategory = async (category) => {
    const res = await axios({
      method: "DELETE",
      url: `${API}delete`,
      data: {
        _id: category._id,
        userOwner: userID,
      },
    });
    GetCategories();
    return res.data;
  };
  const UpdateCategory = async (category) => {
    console.log(category);
    const res = await axios({
      method: "PUT",
      url: `${API}update`,
      data: {
        _id: category._id,
        name: category.name,
        description: category.description,
        userOwner: userID,
      },
    });
    GetCategories();
    return res.data;
  };
  return (
    <CategoryContext.Provider
      value={{
        GetCategories,
        categories,
        AddCategory,
        DeleteCategory,
        categoriesState,
        UpdateCategory,
        toUpdate,
        setToUpdate,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
export { CategoryProvider };
export default CategoryContext;
