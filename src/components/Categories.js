import { useState } from "react"
import "../scss/dropdown.scss"

function Categories({ categories, selected, toggleOption }) {
  const [toggleIndex, setToggleIndex] = useState(false)

  function isClick() {
    const dropdown = document.querySelector(".dropdown")
    const sub = document.querySelector(".dropdown__sub")

    if (!toggleIndex) {
      sub.style.height = `${sub.scrollHeight}px`
      dropdown.classList.add("dropdown--active")
      setToggleIndex(true)
      return
    }
    sub.style.height = 0
    dropdown.classList.remove("dropdown--active")
    setToggleIndex(false)
  }

  return (
    <div className='categories'>
      <div className='dropdown'>
        <div className={"dropdown__top"} onClick={() => isClick()}>
          {selected.every((e) => e === "") ? (
            <span>All</span>
          ) : (
            selected.map((cat) => {
              return <span>{cat}</span>
            })
          )}
        </div>

        <ul className='dropdown__sub'>
          {categories.map((cat) => {
            return (
              <li onClick={() => toggleOption({ cat })} key={cat}>
                <span>{cat}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Categories
