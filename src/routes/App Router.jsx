import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/home";
import Settings from "../pages/settings";
import Jobs from "../pages/jobs"
import Inbox from "../pages/Inbox";
import Profile from "../pages/profile";
import { NotifyProvider } from "../components/NotifyContext";

export default function AppRouter(){
    return(
        <NotifyProvider>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="settings" element={<Settings/>}/>
                <Route path="jobs" element={<Jobs/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="inbox" element={<Inbox/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </NotifyProvider>
    )
}