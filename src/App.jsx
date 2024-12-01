import Header from "./components/Header/Header"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar/Sidebar"
import Home from "./page/Homepage/Home"
import Footer from "./components/footer/Footer"
import SingleProduct from "./page/SingleProduct/SingleProduct"
function App() {
  return (
    <>
      <Header />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App