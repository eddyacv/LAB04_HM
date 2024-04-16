import React from 'react';

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Header from "./header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./footer";

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <div className="container-fluid bg-dark p-0">
        <Header /> 
        <div className="container-fluid ">
            <div className="row align-items-center">
                <div className="col-md-8 py-4 d-flex">
                    <Main />
                </div>
                <div className="col-md-4">
                    <Aside />
                </div>
            </div>
        </div>
        <Footer />
        </div>
              
    </StrictMode>
);