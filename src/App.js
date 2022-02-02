import React from "react"
import './App.css'

// Import components
import Header from "./Components/Header/Header"
import Bike from "./Components/Bike/Bike"

const App = () => {
    return (
        <div className="App">
            <Header />
            <Bike />
        </div>
    )
};

export default App;