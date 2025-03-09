import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import { ToastContainer } from 'react-toastify';
import Login from "./pages/auth/Login";
function App() {
  return (
    <div>
      <div></div>
      <ToastContainer/>
      <BrowserRouter>
        <main>
          <Routes>
             <Route>
                 <Route path="/register" element={<Register/>} />
                 <Route path="/login" element={<Login/>} />
             </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
