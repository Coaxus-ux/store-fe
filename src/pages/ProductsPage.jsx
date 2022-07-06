import Header from "../components/Header";
import { useParams } from "react-router-dom";
import CardProducts from "../components/CardProducts";
const ProductsPage = () => {
  let params = useParams();
  console.log(params.id);
  return (
    <div>
      <Header />
      <div className="mx-10 flex flex-wrap justify-items-center content-center place-content-center">
        <CardProducts product={params.id} />
      </div>
    </div>
  );
};
export default ProductsPage;
