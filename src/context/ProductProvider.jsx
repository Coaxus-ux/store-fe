import { createContext, useState } from "react";
const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [msg, setMsg] = useState("desde ProductProvider");
  return (
    <ProductContext.Provider
      value={{
        msg,
        setMsg,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export { ProductProvider };
export default ProductContext;
