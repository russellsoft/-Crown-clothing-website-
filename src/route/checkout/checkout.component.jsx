import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import CheckOutItems from '../../components/checkout-item/checkout-item.component'

import './checkout.styles.scss'

const CheckOut = () => {
	const { cartItems } = useContext(CartContext)

	let total = 0

	cartItems.map(item => 
		item.quantity <= 1 
		? total += item.price 
		: total = item.price * item.quantity + total 
		)

	console.log(total);

	return (
		<div className='checkout-container '>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.length
				? (cartItems.map(cartItem => <CheckOutItems key={cartItem.id} cartItem={cartItem} />)
				) : (
					<span className='empty-cart-notification'>There is nothing in here, go and add something in the shop!</span>)}
			<span className='total'>{`Total: ${total}`}</span>
		</div>
	)
}

export default CheckOut