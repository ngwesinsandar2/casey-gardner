import React from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";

const LazyFavCaseyScenes = React.lazy(
  () => import("../pages/FavCaseyScenes/FavCaseyScenes")
);
const LazyGallery = React.lazy(() => import("../pages/Gallery/Gallery"));

const View = () => {
  return (
    <>
      <Routes>
        <Route index path="/atypical_casey" element={<Home />} />
        <Route
          path="fav_casey_scenes"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyFavCaseyScenes />
            </React.Suspense>
          }
        />
        <Route path="/about_casey" element={<About />} />
        <Route
          path="gallery_casey"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyGallery />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default View;
