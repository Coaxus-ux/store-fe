import React, { useState } from "react";
import Header from "../components/Header";
import CardCategories from "../components/CardCategories";
const CategoriesPage = () => {
  const [products, setProducts] = useState({
    id: 1,
    name: "La vida es bella",
    image: "https://i.pinimg.com/originals/de/b6/7a/deb67afd841ed7dd407223a1e17474ed.jpg",
    description: "angry sad happy",
    category: "sad"
});

  return (
    <div>
      <Header />
      <h1 className="text-4xl mx-5 font-bold mb-10 uppercase underline">Categorias</h1>
      <div className="mx-10 flex flex-wrap justify-items-center content-center place-content-center">
        {/* {products.map((product) => (
          <CardProduct product={product} />
        ))} */}
        <CardCategories product={products} />
      </div>
    </div>
  );
};
export default CategoriesPage;
