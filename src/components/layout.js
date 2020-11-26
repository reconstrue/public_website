import React from "react";
import "./layout.css";
import "fontsource-roboto"; // Defaults to weight 400 with all styles included.
import Navbar from "./navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <div id='header' >
        {/*
        <div>
          <img src='/reconstrue_combo_mark.svg' width='100%' alt="Reconstrue's combination brandmark"/>
        </div>
        */}
        <div id='navbar_container' >
          <Navbar/>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
