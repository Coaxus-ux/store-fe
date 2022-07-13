import { useContext } from "react";
import CategoryConext from "../context/CategoryProvider";

const useCategory = () => {
  return useContext(CategoryConext);
};
export default useCategory;
