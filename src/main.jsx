import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./globals.css";

const myArray = [
  "circle",
  "xshape",
  "circle",
  "xshape",
  "circle",
  "xshape",
  "circle",
  "xshape",
  "circle",
  "xshape",
  "circle",
  "xshape",
  "circle",
  "xshape",
  "circle",
  "xshape",
  "circle",
  "xshape",
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="lines">
      <div className="line1">
        <div className="shapes">
          {myArray.map((shape, index) => (
            <div key={index} className={shape}></div>
          ))}
        </div>
      </div>
      <div className="line2">
        <div className="shapes">
          {myArray.map((shape, index) => (
            <div key={index} className={shape}></div>
          ))}
        </div>
      </div>
      <div className="line3">
        <div className="shapes">
          {myArray.map((shape, index) => (
            <div key={index} className={shape}></div>
          ))}
        </div>
      </div>
      <div className="line4">
        <div className="shapes">
          {myArray.map((shape, index) => (
            <div key={index} className={shape}></div>
          ))}
        </div>
      </div>
    </div>
    <App />
  </React.StrictMode>
);
