import React from 'react'
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
// import Addproduct from './components/Addproduct'
// import Cart from './components/Cart'
// import Login from './components/Login'
// import Main from './components/Main'
import Nav from './components/Nav'
import { isAdmin, isLoggedIn } from './services/Auth'
const Main=React.lazy(()=> import('./components/Main'));
const Login=React.lazy(()=> import('./components/Login'));
const Cart=React.lazy(()=> import('./components/Cart'));
const Addproduct=React.lazy(()=> import('./components/Addproduct'));

function ProtectedRoute({children}){
  const auth=isLoggedIn();
  return auth ? children : <Navigate to="/" />
}
function ProtectedAdminRoute({children}){
  const auth=isLoggedIn();
  const adminauth=isAdmin();
  if(auth && adminauth){
    return auth && adminauth ? children : <Navigate to="/" />
  }
  else{
    return auth && adminauth ? children : <Navigate to="/main" />
  }
  
}
export default function App() {
  return (
    <div>
        <Router>
            <Nav />
            <section className='container'>
                <Routes>
                    <Route path="/" element={
                    <React.Suspense fallback={<>....</>}>
                         <Login/>
                    </React.Suspense>
                    }/>
                    <Route path="/main" element={
                      <React.Suspense fallback={<>....</>}>
                      <ProtectedRoute>
                          <Main/>
                      </ProtectedRoute>
                      </React.Suspense>
                    }/>
                    <Route path="/cart" element={
                       <React.Suspense fallback={<>....</>}>
                      <ProtectedRoute>
                           <Cart/>
                      </ProtectedRoute>
                      </React.Suspense>
                    }/>
                    <Route path="/addpro" element={
                       <React.Suspense fallback={<>....</>}>
                      <ProtectedAdminRoute>
                           <Addproduct />
                      </ProtectedAdminRoute>
                      </React.Suspense>
                    }/>
                </Routes>
            </section>
        </Router>
    </div>
  )
}
