import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/ProductsPage";

import { ProductProvider } from "./context/ProductProvider";
function App() {
  return (
    <>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="products/:id" element={<ProductsPage />} />
        </Routes>
      </ProductProvider>
    </>
  );
}

export default App;
