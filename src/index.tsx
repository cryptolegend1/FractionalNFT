import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Collections from "./pages/Collections";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import theme from "./theme";
import Collection from "./pages/Collection";
import Vault from "./pages/Vault";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/vaults/:vaultId" element={<Vault />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:collectionId" element={<Collection />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
