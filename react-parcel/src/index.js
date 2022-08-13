import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./features/home/Home";
import { Users } from "./features/users/Users";
import { UserCircleAlt, UserSquareAlt } from "iconoir-react";
import * as bootstrap from "bootstrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid d-flex justify-content-between">
            <a className="navbar-brand" href="#">
              TITLE
            </a>
            <div></div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="users">
                  Users
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <UserCircleAlt color="white" />
              </li>
            </ul>
          </div>
        </nav>

        <main className="p-5">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/users" element={<Users />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  </Provider>
);
