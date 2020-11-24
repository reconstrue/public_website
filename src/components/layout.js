import React from "react";
import "./layout.css";
import "fontsource-roboto"; // Defaults to weight 400 with all styles included.

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <img src='/reconstrue_combo_mark.svg' width='100%' alt='Reconstrue combination brandmark'/>
      <div>
        {children}
      </div>
    </div>
  );
}
