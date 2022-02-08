import React from "react"
import './App.css'

// Import components
import Header from "./Components/Header/Header"
import Bike from "./Components/Bike/Bike"
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Bike />
            <Footer />
        </div>
    )
};

export default App;