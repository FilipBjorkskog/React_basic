import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/index.tsx'
import Shop from './Pages/Shop.tsx'
import Checkout from './Pages/Checkout.tsx'
import Login from './Pages/Login.tsx'
import Register from './Register.tsx'
import './index.css'
import Layout from './component/Layout.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(
  document.getElementById('root')!)
  .render(
    <React.StrictMode>
      <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Shop" element={<Shop />}/>
          <Route path="/Checkout" element={<Checkout />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Register" element={<Register />}/>
        </Routes>
      </Router>
      </Layout>
    </React.StrictMode>, 
  )
   