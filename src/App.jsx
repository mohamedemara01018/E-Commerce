import Header from "./components/Header/Header"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar/Sidebar"
import Home from "./page/Homepage/Home"
import Footer from "./components/footer/Footer"
import SingleProduct from "./page/SingleProduct/SingleProduct"
import CategoryProductPage from "./page/CategoryPage/CategoryProductPage"
import { ToastContainer } from "react-toastify"

//css to toast
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/category/:category" element={<CategoryProductPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App