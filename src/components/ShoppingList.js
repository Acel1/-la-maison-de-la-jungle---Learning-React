import { useState } from "react"
import { plantList } from "../datas/plantList"
import PlantItem from "./PlantItem"
import Categories from "./Categories"

function ShoppingList({ addItem, setIsOpen }) {
  const [selected, setSelected] = useState([""])
  const categories = plantList.reduce((acc, elem) => (acc.includes(elem.category) ? acc : acc.concat(elem.category)), [])

  const toggleOption = ({ cat }) => {
    setSelected((prevSelected) => {
      const newArray = [...prevSelected]
      if (newArray.includes(cat)) {
        return newArray.filter((item) => item !== cat)
      } else {
        newArray.push(cat)
        return newArray
      }
    })
  }
  return (
    <div className='lmj-shopping-list'>
      <Categories categories={categories} selected={selected} toggleOption={toggleOption} />

      <ul className='lmj-plant-list'>
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          selected.includes(category) || selected.length === 1 ? (
            <div key={id}>
              <PlantItem cover={cover} name={name} water={water} light={light} price={price} addItem={addItem} setIsOpen={setIsOpen} />
            </div>
          ) : null
        )}
      </ul>
    </div>
  )
}

export default ShoppingList
