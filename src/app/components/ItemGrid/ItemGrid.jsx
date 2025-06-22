"use client";

import styles from "./ItemGrid.module.css";
import ItemCard from "../ItemCard/ItemCard";
import { useItemContext } from "../../context/ItemContext";
import { useEffect } from "react";
import Loader from "../Loader/Loader";

export default function ItemGrid() {
  const {
    itemCatalog,
    isFilterVisible,
    filterCategories,
    selectedFilters,
    setSelectedFilters,
    filteredItems,
    setFilteredItems,
    loading,
  } = useItemContext();
  const data = useItemContext();

  useEffect(() => {
    const filteredValue =
      selectedFilters.length === 0
        ? []
        : itemCatalog.filter((item) =>
            selectedFilters.includes(item.category)
          );

    setFilteredItems(filteredValue);
  }, [selectedFilters]);

  const filterCheckBoxes = (e) => {
    const { value, checked } = e.target;

    if (checked) setSelectedFilters((prev) => [...prev, value]);
    else setSelectedFilters((prev) => prev.filter((item) => item !== value));
  };

  console.log("ContextObject", data);

  return (
    <section className={styles.itemGridWrapper}>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          {isFilterVisible && (
            <aside className={styles.filterSection}>
              <h2>Filters</h2>
              <ul>
                {filterCategories?.map((category, index) => {
                  return (
                    <li key={index}>
                      <label>
                        <input
                          type="checkbox"
                          value={category}
                          onChange={filterCheckBoxes}
                          checked={selectedFilters.includes(category)}
                        />
                        {category}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </aside>
          )}

          <div className={styles.itemGrid}>
            {(filteredItems?.length > 0
              ? filteredItems
              : itemCatalog
            )?.map((item) => (
              <ItemCard
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}