
import { useState } from 'react'
import './App.css'
import CartContainer from './components/CartContainer/CartContainer'
import Header from './components/Header/Header'
import Products from './components/Products/Products'

function App() {
  const [cart, setCart] = useState([]);
  const [prices, setPrice] = useState(0);
  const [about, setAbout] = useState([])
  const [isActive, setActive] = useState({
    cart: true
  });
  const handleToggle = (btn) => {
    if (btn==='cart') {
      setActive({
        cart: true
      })
      
    } else {
      setActive({
        cart: false
      })

    }
  }
  

  const handleProduct = (product) => {
    const isExist = cart.find(pro => pro.id === product.id)
    if (isExist) {
       alert('This Product Already Exist')
    } else {
      handlePrice(product.price)
      const newProduct=[...cart,product]
      setCart(newProduct)
    }
  }

  const handleDeletePrice = (id) => {
    const product = cart.find(p => p.id === id);
    console.log(cart)
    setPrice(prices-product.price)
  }
  const handleDelete = (id) => {
    handleDeletePrice(id)
    const del = cart.filter(product => product.id !== id);
    
    const aboutCard = cart.find(p => p.id === id)

    const newAbout=[...about,aboutCard]
    setAbout(newAbout);

    setCart(del)
  }

  const handlePrice = (price) => {
    setPrice(prices+price)
  }
  return (
    <>
      <Header cart={cart} prices={prices}></Header>
      <div className='md:flex justify-around px-12'>
      <Products handleProduct={handleProduct}></Products>
        <CartContainer handleToggle={handleToggle} isActive={isActive} cart={cart} handleDelete={handleDelete} about={about}></CartContainer>
      </div>
    </>
  )
}

export default App
