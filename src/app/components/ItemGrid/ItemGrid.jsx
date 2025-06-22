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
              <details open>
              <summary><b>Ideal For</b></summary>
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
              </details>
              {/* <div style={{marginTop: '2rem'}}> */}
                
                <details close>
                  <summary><b>CUSTOMIZABLE</b></summary>
                  <label><input type="checkbox" disabled /> Customizable</label>
                  <label><input type="checkbox" disabled /> Non-Customizable</label>
                </details>
                <details close>
                  <summary><b>OCCASION</b></summary>
                  <label><input type="checkbox" disabled /> All</label>
                </details>
                <details close>
                  <summary><b>WORK</b></summary>
                  <label><input type="checkbox" disabled /> All</label>
                </details>
                <details close>
                  <summary><b>FABRIC</b></summary>
                  <label><input type="checkbox"  /> Cotton</label>
                  <label><input type="checkbox"  /> Silk</label>
                  <label><input type="checkbox"  /> Polyester</label>
                  <label><input type="checkbox"  /> Denim</label>
                  <label><input type="checkbox"  /> Wool</label>
                  <label><input type="checkbox"  /> Leather</label>
                  <label><input type="checkbox"  /> Velvet</label>
                  <label><input type="checkbox"  /> Linen</label>
                </details>
                <details close>
                  <summary><b>SEGMENT</b></summary>
                  <label><input type="checkbox" disabled /> All</label>
                  <label><input type="checkbox" disabled /> Premium</label>
                  <label><input type="checkbox" disabled /> Mid-Premium</label>
                  <label><input type="checkbox" disabled /> Mid-Budget</label>
                  <label><input type="checkbox" disabled /> Budget</label>

                </details>
                <details close>
                  <summary><b>SUITABLE FOR</b></summary>
                  <label><input type="checkbox" disabled /> All</label>
                  <label><input type="checkbox" disabled /> Men</label>
                  <label><input type="checkbox" disabled /> Women</label>
                  <label><input type="checkbox" disabled /> Baby & Kids</label>
                </details>
                <details close>
                  <summary><b>RAW MATERIALS</b></summary>
                  <label><input type="checkbox" disabled /> All</label>
                </details>
                <details close>
                  <summary><b>PATTERN</b></summary>
                  <label><input type="checkbox" disabled /> All</label>
                  <label><input type="checkbox" disabled /> Plain</label>
                  <label><input type="checkbox" disabled /> Checked</label>
                  <label><input type="checkbox" disabled /> Striped</label>
                  <label><input type="checkbox" disabled /> Floral</label>
                  <label><input type="checkbox" disabled /> Animal Print</label>
                  <label><input type="checkbox" disabled /> Geometric</label>
                  <label><input type="checkbox" disabled /> Abstract</label>
                  <label><input type="checkbox" disabled /> Animal Print</label>
                </details>
              {/* </div> */}
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