import { useEffect } from "react"
import { AiFillDelete } from "react-icons/ai"

function Cart({ cart, updateCart, addItem, deleteItem, isOpen, setIsOpen }) {
  const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0)
  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`
  }, [total])

  return isOpen ? (
    <div className='cart'>
      <button className='cart__toggle-btn' onClick={() => setIsOpen(false)}>
        Fermer
      </button>
      {cart.length > 0 ? (
        <div className='cart__content'>
          <div className='cart__list'>
            <h2>Panier</h2>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`} className='cart__item'>
                <span>
                  {name} {price}€
                </span>
                <div>
                  <button onClick={() => deleteItem(name, price)} className='btn btn--cart btn--red'>
                    -
                  </button>
                  <span className='cart__amount'>{amount}</span>
                  <button onClick={() => addItem(name, price)} className='btn btn--cart'>
                    +
                  </button>
                </div>
              </div>
            ))}
            <button className='btn btn--grey' onClick={() => updateCart([])}>
              <AiFillDelete />
              Vider le panier
            </button>
          </div>

          <div className='cart__footer'>
            <h3>Total : {total}€</h3>
          </div>
        </div>
      ) : (
        <div className='cart__content cart__content--empty'>
          <h2>Votre panier est vide</h2>
        </div>
      )}
    </div>
  ) : (
    <div className='cart-closed'>
      <button className='cart__toggle-btn' onClick={() => setIsOpen(true)}>
        Ouvrir le Panier
      </button>
    </div>
  )
}

export default Cart
