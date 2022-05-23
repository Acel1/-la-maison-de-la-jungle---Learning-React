import CareScale from "./CareScale"

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, water, light, price, addItem, setIsOpen }) {
  return (
    <li className='plant-card' onClick={() => handleClick}>
      <span className='plant-card__price'>{price}€</span>
      <img className='plant-card__cover' src={cover} alt={`${name} cover`} />
      <h3 className='plant-card__name'>{name}</h3>
      <div className='plant-card__care'>
        <CareScale careType='water' scaleValue={water} />
        <CareScale careType='light' scaleValue={light} />
      </div>
      <button
        className='btn plant-card__btn'
        onClick={() => {
          addItem(name, price)
          setIsOpen(true)
        }}>
        Ajouter
      </button>
    </li>
  )
}

export default PlantItem
