"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [itemCatalog, setItemCatalog] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [loading, setLoading] = useState(true);
  const [filterCategories, setFilterCategories] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchItemData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const response = await res.json();
        setItemCatalog(response);
        const categorySet = new Set(response.map((item) => item.category));
        setFilterCategories(Array.from(categorySet));
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItemData();
  }, []);

  return (
    <ItemContext.Provider
      value={{
        itemCatalog,
        setItemCatalog,
        isFilterVisible,
        setIsFilterVisible,
        filterCategories,
        setFilterCategories,
        selectedFilters,
        setSelectedFilters,
        filteredItems,
        setFilteredItems,
        loading,
        setLoading,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => useContext(ItemContext);