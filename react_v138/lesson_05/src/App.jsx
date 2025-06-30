
import React from "react";
import { Routes, Route } from "react-router";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services/Services"
import NotFound from "./Pages/404/404";


export default function App() {
    return (
        <div className="App">
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}
