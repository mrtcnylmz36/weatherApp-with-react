import React, { useState } from "react";
import { useWeather } from "../context/WeatherContext";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import citiesData from "../cities.json";
import "./styles.css";

const data = citiesData.map((city) => {
  return {
    value: city.il_adi,
    label: city.il_adi,
  };
});

function Search() {
  const { cityName, setCityName } = useWeather();
  const navigate = useNavigate();
  return (
    <div className="select-container">
      <Select
        placeholder="Hava durumu arama"
        options={data}
        defaultValue={cityName.value}
        onChange={setCityName}
        styles={{
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: "rgba(0,0,0,0.3)",
          }),
          option: (baseStyles) => ({
            ...baseStyles,
            padding: "0",
            scrollbarWidth: "none !important",
          }),
          indicatorSeparator: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "#4d88a0 !important",
          }),
          control: (baseStyles, { isFocused }) => ({
            ...baseStyles,
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: "20px !important",
            border: isFocused ? "none" : "none",
            outline: isFocused ? "none" : "none",
            boxShadow: isFocused ? "none" : "none",
            ":hover": {
              cursor: "text",
            },
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: "20px",
            padding: "10px",
            scrollbarWidth: "none !important",
            cursor: "text",
          }),
          menuList: (baseStyles) => ({
            ...baseStyles,
            scrollbarWidth: "none !important",
            cursor: "text",
          }),
          container: (baseStyles) => ({
            ...baseStyles,
            scrollbarWidth: "none !important",
            cursor: "text",
          }),
          input: (baseStyles) => ({
            ...baseStyles,
            textTransform: "uppercase !important",
          }),
        }}
      />
    </div>
  );
}

export default Search;
