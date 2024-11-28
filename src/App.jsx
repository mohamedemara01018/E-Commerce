import Header from "./components/Header/Header"
import './App.css'
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<div>dkfjdkfj</div>} />
      </Routes>
    </>
  )
}

export default App