import React from "react";
import { useFilter } from "../../Context/FilterContext";
import "./Filter.css";

const Filter = () => {
  const { filterState, filterDispatch } = useFilter();
  const {brand,ideal,size}= filterState;
  return (
    <div>
      <div className="filter_top">
        <h3>Filter</h3>
        <button className="filterClearBtn">ClearAll</button>
      </div>

      <div className="ml-l f-m mb-s">Ideal For: </div>
      <label htmlFor="men">
        <input
          type="checkbox"
          className="ml-l mt-s mb-s"
          id="men"
          checked={ideal.includes("men")}
          onChange={(e) => filterDispatch({ type: "IDEAL",payload: e.target.value })}
          value="men"
        />{" "}
        men
      </label>
      <div>
        <label htmlFor="women">
          <input
            type="checkbox"
            className="ml-l  "
            id="women"
            checked={ideal.includes("women")}
            onChange={(e) => filterDispatch({ type: "IDEAL",payload: e.target.value })}
            value="women"
          />{" "}
          Women
        </label>
      </div>
      <div className="ml-l mt-m">
        <h2 className="f-m">Size:</h2>
        <div className="mt-s">
          <label htmlFor="small">
            <input
              type="checkbox"
              id="small"
              checked={size.includes("small")}
              onChange={(e) => filterDispatch({ type: "SIZE",payload: e.target.value })}
              value="small"
            />{" "}
            Small
          </label>
        </div>
        <div className="mt-s">
          <label htmlFor="medium">
            <input
              type="checkbox"
              id="medium"
              checked={size.includes("medium")}
              onChange={(e) => filterDispatch({ type: "SIZE",payload: e.target.value })}
              value="medium"
            />{" "}
            Medium
          </label>
        </div>
        <div className="mt-s">
          <label htmlFor="large">
            <input
              type="checkbox"
              id="large"
              checked={size.includes("large")}
              onChange={(e) => filterDispatch({ type: "SIZE",payload: e.target.value })}
              value="large"
            />{" "}
            Large
          </label>
        </div>
        <div className="mt-s">
          <label htmlFor="Xlarge">
            <input
              type="checkbox"
              id="Xlarge"
              checked={size.includes("Xlarge")}
              onChange={(e) => filterDispatch({ type: "SIZE",payload: e.target.value })}
              value="Xlarge"
            />{" "}
            XLarge
          </label>
        </div>
      </div>
      <div className="ml-l mt-m">
        <div className="f-m">Brands:</div>
        <div className="mt-s">
          <label htmlFor="Puma">
            <input
              type="checkbox"
              id="Puma"
              checked={brand.includes("Puma")}
              onChange={(e) => filterDispatch({ type: "BRAND",payload: e.target.value })}
              value="Puma"
            />{" "}
            Puma
          </label>
        </div>
        <div className="mt-s">
          <label htmlFor="Addidas">
            <input
              type="checkbox"
              id="Addidas"
              checked={brand.includes("Addidas")}
              onChange={(e) => filterDispatch({ type:"BRAND",payload: e.target.value })}
              value="Addidas"
            />{" "}
            Adiddas
          </label>
        </div>
        <div className="mt-s">
          <label htmlFor="HRX">
            <input
              type="checkbox"
              id="HRX"
              checked={brand.includes("HRX")}
              onChange={(e) => filterDispatch({ type: "BRAND",payload: e.target.value })}
              value="HRX"
            />{" "}
            HRX
          </label>
        </div>
      </div>
      <div className="mt-s ml-l">
        <div className="f-m">SortBy:</div>
        <div className="mt-s">
          <label htmlFor="lowPrice">
            <input
              type="radio"
              id="lowPrice"
              checked={filterState.Sortby === "low-to-high"}
              onChange={() => filterDispatch({ type: "low-to-high" })}
            />{" "}
            Low-to-high
          </label>
        </div>
        <div className="mt-s">
          <label htmlFor="highPrice">
            <input
              type="radio"
              id="highPrice"
              checked={filterState.Sortby === "high-to-low"}
              onChange={() => filterDispatch({ type: "high-to-low" })}
            />{" "}
            High-to-low
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
