
import { useDispatch, useSelector } from 'react-redux'
import Headingslider from '../../components/slider/Slider'
import './Home.css'
import { useEffect } from 'react';
import { fetchProducts, getProduct, getProductStatus } from '../../store/slices/productSlice';
import { STATUS } from '../../utils/status';
import ProductList from '../../components/product-list/ProductList';
import { ScaleLoader } from 'react-spinners';
import { getCategoryState } from '../../store/slices/categorySlice';
// import Loader from '../../components/loader/Loader';


function Home() {
  const dispatch = useDispatch();
  // products
  const products = useSelector(getProduct)
  const productStatus = useSelector(getProductStatus);
  //category
  const category = useSelector(getCategoryState).categories

  useEffect(() => {
    dispatch(fetchProducts(50))
  }, [dispatch])
  let productOftheFirstCategory = products.filter((product) => {

    return product.category == category[0].slug;
  })
  let productOftheSecondCategory = products.filter((product) => {
    return product.category == category[1].slug;

  })
  const productOftheThirdCategory = products.filter((product) => {
    return product.category == category[2].slug;

  })
  const productOftheFourthCategory = products.filter((product) => {
    return product.category == category[3].slug;
  })



  let tempProduct = [];
  if (products.length > 0) {
    for (let i in products) {
      let ind = Math.floor(Math.random() * products.length)
      while (tempProduct.includes(products[ind])) {
        ind = Math.floor(Math.random() * products.length)
      }
      tempProduct[i] = products[ind]
    }
  }
  console.log(tempProduct)
  console.log(productOftheFirstCategory)
  const sections = [tempProduct, productOftheFirstCategory, productOftheSecondCategory, productOftheThirdCategory, productOftheFourthCategory]


  return (
    <main>
      <div className="slider-wraper">
        <div className="container">
          <Headingslider />
        </div>
      </div>
      <div className="container">

        <div className="main-content">
          <div className="categories">
            {
              sections.map((sec, ind) => {
                return <div key={ind} className="categories-item">
                  <div className="title">
                    <h3>{ind == 0 ? 'See Our Products' : sec[1]?.category}</h3>
                  </div>
                  {
                    productStatus !== STATUS.LOADING ? <ProductList allproducts={sec} /> : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px' }}> <ScaleLoader /></div>
                  }
                </div>
              })
            }
            <div className="categories-item">
              <div className="title">
                <h3>See Our Products</h3>
              </div>
              {
                productStatus !== STATUS.LOADING ? <ProductList allproducts={tempProduct} /> : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px' }}> <ScaleLoader /></div>
              }
            </div>

          </div>
        </div>
      </div>


    </main >
  )
}

export default Home