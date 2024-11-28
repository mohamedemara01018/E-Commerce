import Header from "./components/Header/Header"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar/Sidebar"
function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<div>dkfjdkfj</div>} />
      </Routes>
    </>
  )
}

export default App