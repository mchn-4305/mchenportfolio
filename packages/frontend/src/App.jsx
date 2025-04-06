import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout></Layout>}></Route>
      </Routes>
    </Router>
  )
}

export default App
