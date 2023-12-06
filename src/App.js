import React from 'react';
import './App.css';
/* eslint-disable no-unused-vars */
//@ts-check
import { lazy, Suspense } from "react";
import {
    Routes,
    Route
} from "react-router-dom";

// PAGES
const UseRef = lazy(() => import("./pages/useRef/index"));
const LoadingPage = lazy(() => import("./pages/shared/loading/index"));

export default function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
    <Routes>
      <Route path="/use-ref" element={<UseRef />} />
    </Routes>
</Suspense>
  );
}