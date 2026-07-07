import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Notify from "../components/note";

export default function Layout({note, set}){
    return(
        <>
        <Header/>
        <Outlet/>
        <Notify note={note} set={set}/>
         </>
    )
}