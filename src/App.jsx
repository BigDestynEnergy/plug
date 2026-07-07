import { useState } from 'react'
import './App.css'
import AppRouter from './routes/App Router'
import AuthRouter from "./routes/Auth Router"

export default function App(){
  const [sign, setSign] = useState(!false);

  if(sign) return <AppRouter/>
  else return(<AuthRouter/>)
}