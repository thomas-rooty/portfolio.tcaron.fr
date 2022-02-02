import React from "react"
import './App.css'

// Import components
import Header from "./Components/Header/Header"
import Bike from "./Components/Bike/Bike"
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Bike />
        </div>
    )
};

export default App;