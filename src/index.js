
import React from "react";
import ReactDOM from  "react-dom/client";
//import App from "./App";
//import "./index.css";

import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <StarRating maxRating = {5} messages = {["Terrible", "Bad", "Okay", "Good", "Amazing"]} defaultRating = {3} onSetRating={(rating) => (console.log("Rating primul: ", rating))}/>
        <br />
        <StarRating maxRating = {7} size = {24} color = "red" onSetRating={(rating) => (console.log("Rating al doilea: ", rating))} />
    </React.StrictMode>
)