import React from "react";
import { Outlet } from "react-router-dom";
import { WeatherContextProvider } from "../context/WeatherContext";

function Layout() {
  return (
    <div className="site-wrapper">
      <WeatherContextProvider>
        <Outlet />
      </WeatherContextProvider>
    </div>
  );
}

export default Layout;
