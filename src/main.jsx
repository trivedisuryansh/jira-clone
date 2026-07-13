import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import Board from "./pages/Board.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<DashBoard />} />
          <Route path="/w/:wsId/p/:projId" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
