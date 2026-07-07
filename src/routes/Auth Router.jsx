import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "../logs/sign in"
import Signup from "../logs/sign up"

export default function AuthRouter({sign}){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    )
}