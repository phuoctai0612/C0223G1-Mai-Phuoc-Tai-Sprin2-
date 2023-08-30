import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Login from "./components/Login";
import Create from "./components/Create";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path={""}/>
                <Route element={<Login/>} path={"/login"}/>
                <Route element={<Create/>} path={"/create"}/>

            </Routes>
        </BrowserRouter>

        <Footer/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
