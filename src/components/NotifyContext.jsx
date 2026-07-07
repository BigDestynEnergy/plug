
import {createContext, useContext, useState} from "react";
import Notify from "./note";

const NotifyContext = createContext();

export function NotifyProvider({children}){
    const [note, setNote] = useState("")

    function notify(message){
        setNote(message)

        setTimeout(()=>{
            setNote("")
        }, 3000)
    }

    return(
        <NotifyContext.Provider value={{note, notify, setNote}}>  
            {children}
            <Notify note={note} set={setNote}/>
        </NotifyContext.Provider>
    )

}

export function useNotify(){
    return useContext(NotifyContext)
}