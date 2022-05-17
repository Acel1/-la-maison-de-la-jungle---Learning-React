import { useState } from "react"
import Banner from "./Banner"
import logo from "../assets/logo.png"
import Cart from "./Cart"
import Footer from "./Footer"
import ShoppingList from "./ShoppingList"
import "../scss/Layout.scss"

function App() {
  const [cart, updateCart] = useState([])

  function addItem(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name)
    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name)
      updateCart([...cartFilteredCurrentPlant, { name, price, amount: currentPlantAdded.amount + 1 }])
    } else {
      updateCart([...cart, { name, price, amount: 1 }])
    }
  }
  function deleteItem(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name)
    const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name)
    updateCart([...cartFilteredCurrentPlant, { name, price, amount: currentPlantAdded.amount - 1 }])
    if (currentPlantAdded.amount === 1) {
      updateCart([...cartFilteredCurrentPlant])
    }
  }
  return (
    <div>
      <Banner>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} addItem={addItem} deleteItem={deleteItem} />
        <ShoppingList addItem={addItem} />
      </div>
      <Footer />
    </div>
  )
}

export default App
