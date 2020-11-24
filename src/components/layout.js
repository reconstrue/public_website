import React from "react";

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <img src='/reconstrue_combo_mark.svg' width='100%' />
      <div>
        {children}
      </div>
    </div>
  );
}
