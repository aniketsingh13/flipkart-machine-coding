import React from "react";
import { useFilter } from "../../Context/FilterContext";
import "./Filter.css";

const Filter = () => {
  const { filterState, filterDispatch } = useFilter();
  return (
    <div>
      <div className="filter_top">
        <h3>Filter</h3>
        <button className="filterClearBtn">ClearAll</button>
      </div>

      <div className="ml-l f-m mb-s">Ideal For: </div>
      <label htmlFor="men">
        <input type="checkbox" className="ml-l mt-s mb-s" 
        id="men"
        checked={filterState.men}
        onChange={(e) => filterDispatch({type: "MEN"})}
        /> men
      </label>
      <div>
      <label htmlFor="women">
        <input type="checkbox" className="ml-l  " 
        id="women"
        checked={filterState.women}
        onChange={(e) => filterDispatch({type: "WOMEN"})}
        /> Women
      </label>
      </div>
      <div className="ml-l mt-m">
    <h2 className="f-m">Size:</h2>
    <div className="mt-s">
    <label htmlFor="small">
        <input type="checkbox" 
        id="small"
        checked={filterState.small}
        onChange={(e) => filterDispatch({type: "SMALL"})}
        /> Small
      </label>
    </div>
    <div className="mt-s">
    <label htmlFor="medium">
        <input type="checkbox" 
        id="medium"
        checked={filterState.medium}
        onChange={(e) => filterDispatch({type: "MEDIUM"})}
        /> Medium
      </label>
    </div>
    <div className="mt-s">
    <label htmlFor="large">
        <input type="checkbox" 
        id="large"
        checked={filterState.large}
        onChange={(e) => filterDispatch({type: "LARGE"})}
        /> Large
      </label>
    </div>
    <div className="mt-s">
    <label htmlFor="Xlarge">
        <input type="checkbox" 
        id="Xlarge"
        checked={filterState.Xlarge}
        onChange={(e) => filterDispatch({type: "XLARGE"})}
        /> XLarge
      </label>
    </div>
      </div>
      <div className="ml-l mt-m">
     <div className="f-m">Brands:</div>
     <div className="mt-s">
    <label htmlFor="Puma">
        <input type="checkbox" 
        id="Puma"
        checked={filterState.Puma}
        onChange={(e) => filterDispatch({type: "PUMA"})}
        /> Puma
      </label>
    </div>
    <div className="mt-s">
    <label htmlFor="Addidas">
        <input type="checkbox" 
        id="Addidas"
        checked={filterState.Addidas}
        onChange={(e) => filterDispatch({type: "ADDIDAS"})}
        /> Adiddas
      </label>
    </div>
    <div className="mt-s">
    <label htmlFor="HRX">
        <input type="checkbox" 
        id="HRX"
        checked={filterState.HRX}
        onChange={(e) => filterDispatch({type: "HRX"})}
        /> HRX
      </label>
    </div>
      </div>
      <div className="mt-s ml-l">
       <div className="f-m">SortBy:</div>
       <div className="mt-s">
    <label htmlFor="lowPrice">
        <input type="radio" 
        id="lowPrice"
        checked={filterState.Sortby === "low-to-high"}
        onChange={(e) => filterDispatch({type: "LOWTOHIGH",payload: e.target.value})}
        /> Low-to-high
      </label>
    </div>
    <div className="mt-s">
    <label htmlFor="highPrice">
        <input type="radio" 
        id="highPrice"
        checked={filterState.Sortby === "high-to-low"}
        onChange={(e) => filterDispatch({type: "HIGHTTOLOW",payload: e.target.value})}
        /> High-to-low
      </label>
    </div>
      </div>
    </div>
  );
};

export default Filter;
