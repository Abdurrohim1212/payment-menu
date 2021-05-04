import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { isSubMenuOpen } = useGlobalContext();
  return (
    <aside className={`${isSubMenuOpen ? `submenu show` : `submenu`}`}>
      ethan kurniawan
    </aside>
  );
};

export default Submenu;
