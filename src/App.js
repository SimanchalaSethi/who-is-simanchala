import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import Contact from './Contact/Contact';
import Blog from './Blog/Blog';
import GreetingPopup from './Greeting/GreetingPopup';
import Services from './Service/Services';

function App() {
    return (
        <div className="App">
            <GreetingPopup/>
            <Header />
            <Main />
            <Services/>
            <Blog/>
            <Contact/>
        </div>
    );
}

export default App;
