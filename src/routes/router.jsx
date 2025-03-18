import { BrowserRouter, Router, Routes, Route } from "react-router";
import HomePage from "../pages/homepage";

function Rotas(){

    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}/>
            </Routes>
        </Router>
        </>
    )
}

export default Rotas