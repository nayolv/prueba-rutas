import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { Dashboard } from "./pages/Dashboard";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import { UserPage } from "./pages/UserPage";
import { UsersPage } from "./pages/UsersPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/usuarios" element={<Navigate to="/users" />} />
        <Route path="/users/:id" element={<UserPage />} />

        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="welcome" element={<p>Welcome</p>} />
          <Route path="goodbye" element={<p>GoodBye</p>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
