

import "./note.css"

export default function Notify({note, set}){
    
    
    if(!note) return
    return(
        <main className="note">
            <div className="line"></div>
          <div className="note-card">
              
            <div className="content">
                {note}
            </div>
            <span onClick={()=>set("")}>close</span>
        
          </div>
        </main>
    )
}