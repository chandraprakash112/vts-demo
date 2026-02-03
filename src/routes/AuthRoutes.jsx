import { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "../pages/Auth/Login";


export default function AuthRoutes() {

  return (
    <div>
      <Suspense fallback={"<Loading />"}>
        <Routes>
           <Route path="" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  );
}
