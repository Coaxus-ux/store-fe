import { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CardCategories from "../components/CardCategories";
import CategoryProvider from "../context/CategoryProvider";
import useCategory from "../hooks/useCategory";
const CategoriesPage =  () => {
  const navigate = useNavigate();
  const { GetCategories, categories } = useCategory();
  
  useEffect(() => {
    GetCategories();
  }, [categories]);



  return (
    <div>
      <Header />
      <h1 className="text-4xl mx-5 font-bold mb-10 uppercase underline">Categorias</h1>
      <div className="mx-10 flex flex-wrap justify-items-center content-center place-content-center">
        {categories.map((category) => (
          <CardCategories key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};
export default CategoriesPage;
