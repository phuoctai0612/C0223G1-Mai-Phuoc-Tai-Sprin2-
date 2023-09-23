import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Login from "./components/Login";
import Detail from "./components/Detail";
import SignUp from "./components/SignUp";
import Movie from "./components/Movie";
import ListSearchMovie from "./components/ListSearchMovie";
import ListSearchAuthor from "./components/ListSearchAuthor";
import ListSearchActor from "./components/ListSearchActor";
import ListSearchCategory from "./components/ListSearchCategory";
import ListSearchNameMovie from "./components/ListSearchNameMovie";
import ListFavouriteAccount from "./components/ListFavouriteAccount";
import Error from "./components/Error";
import Payment from "./components/Payment";
import ReturnPayment from "./components/ReturnPayment";
import HistoryPaymentAccount from "./components/HistoryPaymentAccount";
import ReturnFailPayment from "./components/ReturnFailPayment";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route element={<Home/>} path={""}/>
                <Route element={<Payment/>} path={"/payment"}/>
                <Route element={<Login/>} path={"/login"}/>
                <Route element={<SignUp/>} path={"/signup"}/>
                <Route element={<ListSearchMovie/>} path={"/list"}/>
                <Route element={<ListSearchMovie/>} path={"/list/:nation"}/>
                <Route element={<ListSearchNameMovie/>} path={"/list-movie/:name"}/>
                <Route element={<ListSearchNameMovie/>} path={"/list-movie/"}/>
                <Route element={<ListSearchActor/>} path={"/list/actor/:actor"}/>
                <Route element={<ListSearchAuthor/>} path={"/list/author/:id"}/>
                <Route element={<ListSearchCategory/>} path={"/list/category/:id"}/>
                <Route element={<Movie/>} path={"/movie/:id"}/>
                <Route element={<Detail/>} path={"/detail/:id"}/>
                <Route element={<Error/>} path={"/error"}/>
                <Route element={<ReturnPayment/>} path={"/return"}/>
                <Route element={<ListFavouriteAccount/>} path={"/favourite"}/>
                <Route element={<ReturnFailPayment/>} path={"/return-fail"}/>
                <Route element={<HistoryPaymentAccount/>} path={"/history-account"}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
