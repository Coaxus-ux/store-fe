import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/ProductsPage";

import { ProductProvider } from "./context/ProductProvider";
import { AuthProvider } from "./context/AuthProvider";
import { CategoryProvider } from "./context/CategoryProvider";
function App() {


  
  return (
    <AuthProvider>
    <ProductProvider>
      <CategoryProvider>
        
          <Routes>
          <Route path="/" element={<Login /> } />
           
            
            
            <Route path="register" element={<Register />} />
            <Route path="categories" element={ <CategoriesPage />} />
            <Route path="products/:id" element={<ProductsPage />} />
          </Routes>
        
      </CategoryProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
