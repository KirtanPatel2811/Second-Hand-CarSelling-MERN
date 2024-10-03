import React from "react";
import "./Admin.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddCar from "../../Components/addCar/AddCar";
import ListCar from "../../Components/listCar/ListCar";
import ListUsers from "../../Components/listUsers/ListUsers";
import InventoryPage from "../../Components/Inventory/InventoryPage";

import ListInquiries from "../..//Components/Inquiries/Inquiries";

import ListReviews from "../../Components/review/Reviews";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addCar" element={<AddCar />} />
        <Route path="/listCar" element={<ListCar />} />
        <Route path="/listUsers" element={<ListUsers />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/inquiries" element={<ListInquiries />} />
        <Route path="/reviews" element={<ListReviews />} />
      </Routes>
    </div>
  );
};

export default Admin;
