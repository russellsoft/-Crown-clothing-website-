import './cart-dropdown.styles.scss'

import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'

import { useNavigate } from 'react-router-dom'

import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

const CartDropdown = () => {
	const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext)
	const navigate = useNavigate()

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

	const goToCheckoutHandler = () => {
		navigate('/checkout');
		toggleIsCartOpen()
	 };

	return (
		<div className="cart-dropdown-container">
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					))
				) : (
					<span className='empty-message'>Your cart is empty</span>
				)}
			</div>
			<Button onClick={goToCheckoutHandler}>TO CHECKOUT</Button>
		</div>
	)
}

export default CartDropdown