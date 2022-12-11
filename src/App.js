import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Account from './components/Account'
import Login from './components/Login'
export default function App() {
  return (
    <>
       <Router>
           <Routes>
               <Route path='/' element={<Login/>}/>
               <Route path='/account' element={<Account/>}/>
           </Routes>
       </Router>
    </>
  )
}
