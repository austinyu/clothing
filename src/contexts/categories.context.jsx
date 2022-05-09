import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from "../shop-data.js";
// import PRODUCTS_DATA from "../shop-data.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({});
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setcategoriesMap(categoryMap);
    }
    getCategoriesMap();
  }, [])
  const value = { categoriesMap };
  return <CategoriesContext.Provider value={value}>{children} </CategoriesContext.Provider>;
};
