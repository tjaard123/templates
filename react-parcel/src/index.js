import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { UserCircleAlt } from "iconoir-react";

import * as bootstrap from "bootstrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid d-flex justify-content-between">
        <a class="navbar-brand" href="#">
          TITLE
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <UserCircleAlt color="white" />
          </li>
        </ul>
      </div>
    </nav>

    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  </div>
);
