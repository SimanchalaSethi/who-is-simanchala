import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Services from './components/Services';


import './App.css';
import Contact from './components/Contact';
import Blog from './components/Blog';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Services />
            <Blog/>
            <Contact/>
        </div>
    );
}

export default App;
