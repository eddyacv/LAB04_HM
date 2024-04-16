import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import Header from "./header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./footer";
const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Header></Header> 
        <div className="container">
            <div className="row">
                <div className="col-md-8 py-4">
                    <Main></Main>
                </div>
                <div className="col-md-4">
                    <Aside></Aside>
                </div>
            </div>
        </div>
        <Footer></Footer>            
    </StrictMode>
);