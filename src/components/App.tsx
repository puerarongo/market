import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// * Components
import AppBar from "./appBar/AppBar";
import Shop from "./shop/Shop";
import ProductPage from "./productPage/ProductPage";
import Registration from "./registration/Registration";
import Login from "./login/Login";
import Personal from "./personal/Personal";
import Basket from "./basket/Basket";
import NotFound from "./notFound/NotFound";
import Private from "./hooks/Private";
import Public from "./hooks/Publuc";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Shop />} />
          <Route path="/:productId" element={<ProductPage />} />
          <Route element={<Private />}>
            <Route path="/personal" element={<Personal />} />
            <Route path="/basket" element={<Basket />} />
          </Route>

          <Route element={<Public />}>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
