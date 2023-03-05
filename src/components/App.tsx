import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// * Components
import AppBar from "./appBar/AppBar";
import Loader from "./loader/Loader";
import Private from "./private&public/Private";
import Public from "./private&public/Publuc";

// todo lazy load
const Shop = lazy(() => import("./shop/Shop"));
const ProductPage = lazy(() => import("./productPage/ProductPage"));
const Registration = lazy(() => import("./registration/Registration"));
const Login = lazy(() => import("./login/Login"));
const Personal = lazy(() => import("./personal/Personal"));
const Basket = lazy(() => import("./basket/Basket"));
const NotFound = lazy(() => import("./notFound/NotFound"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Shop />} />
          <Route path="/detail/:productId" element={<ProductPage />} />

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
    </Suspense>
  );
};

export default App;
