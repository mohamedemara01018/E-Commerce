import Header from "./components/Header/Header"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar/Sidebar"
import Home from "./page/Home/Home"
function App() {
  return (
    <>
      <Header />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App