import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Contact from "./Contact/Contact";
import Blog from "./Blog/Blog";
import Services from "./Service/Services";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
