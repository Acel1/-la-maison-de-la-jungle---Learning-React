import { useState } from "react"
import { plantList } from "../datas/plantList"
import PlantItem from "./PlantItem"
import Categories from "./Categories"
import "../styles/ShoppingList.css"

function ShoppingList({ addItem }) {
  const [activeCategory, setActiveCategory] = useState("")
  const categories = plantList.reduce((acc, elem) => (acc.includes(elem.category) ? acc : acc.concat(elem.category)), [])

  return (
    <div className='lmj-shopping-list'>
      <Categories categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory} />

      <ul className='lmj-plant-list'>
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id}>
              <PlantItem cover={cover} name={name} water={water} light={light} price={price} />
              <button onClick={() => addItem(name, price)}>Ajouter</button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  )
}

export default ShoppingList
