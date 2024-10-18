import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Services from './components/Services';


import './App.css';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Services />
            <Contact/>
        </div>
    );
}

export default App;
