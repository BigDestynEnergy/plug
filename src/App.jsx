import { useState } from 'react'
import './App.css'
import AppRouter from './routes/App Router'

export default function App(){
  const [sign, setSign] = useState(!false);

  if(sign) return <AppRouter/>
}