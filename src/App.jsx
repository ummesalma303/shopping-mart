
// import { useState } from 'react'
import './App.css'
import CartContainer from './components/CartContainer/CartContainer'
import Header from './components/Header/Header'
import Products from './components/Products/Products'

function App() {
  // const [isActive, setActive] = useState({
  //   cart: true
  // });
  // const handleToggle = (btn) => {
  //   if (btn==='cart') {
  //     setActive({
  //       cart: true
  //     })
      
  //   } else {
  //     setActive({
  //       cart: false,
  //     })

  //   }
  // }
  
  return (
    <>
      <Header></Header>
      <div className='flex justify-around'>
      <Products></Products>
        {/* <CartContainer handleToggle={handleToggle} isActive={isActive}></CartContainer> */}
      <CartContainer></CartContainer>
        
      </div>
    </>
  )
}

export default App
