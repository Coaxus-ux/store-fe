import { useEffect } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import CardProducts from "../components/CardProducts";
import useProducts from "../hooks/useProduct";
import useCategory from "../hooks/useCategory";
const ProductsPage = () => {
  const { GetProducts, products } = useProducts();
  const { categories } = useCategory();
  

  const { id } = useParams();
  
  useEffect(() => {
    GetProducts(id);
    // eslint-disable-next-line
  }, []);
  // search category by id
  const category = categories.find((category) => category._id === id);
  
  return (
    <div>
      <Header />
      <h1 className="text-4xl mx-5 font-bold mb-10 uppercase underline">
        Categorias/{category?.name}
      </h1>
      <div className="mx-10 flex flex-wrap justify-items-center content-center place-content-center">
        {products?.length >= 0 ? (
          products.map((product) => (
            <CardProducts key={product._id} products={product} />
          ))
        ) : (
          <h1 className="text-6xl">No hay productos</h1>
        )}
      </div>
    </div>
  );
};
export default ProductsPage;
