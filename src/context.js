import React, { useState, useContext } from "react";
import sublinks from "./data";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return <AppContext.Provider>{children}</AppContext.Provider>;
};
