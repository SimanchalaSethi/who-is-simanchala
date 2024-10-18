import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Services from './components/Services';


import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Services />
            <Footer />
        </div>
    );
}

export default App;
