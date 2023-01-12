import { createContext, useState, useEffect } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, productToRemove) => {
	const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id)

	if (existingCartItem.quantity === 1) {
		return cartItems.filter(cartItem => cartItem.id !== existingCartItem.id)
	}

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToRemove.id
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem)
	};
};

export const clearCartItem = (cartItems, productToRemove) => cartItems.filter(cartItem => cartItem.id !== productToRemove.id)

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => { },
	cartItems: [],
	addItemToCart: () => { },
	removeItemFromCart: () => { },
	clearItemFromCart: () => { },
	cartCount: 0,
	cartTotal: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartItemCount, setCartItemCount] = useState(0);

	useEffect(() => {
		const count = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		setCartItemCount(count);
	}, [cartItems]);

	const addItemToCart = (product) =>
		setCartItems(addCartItem(cartItems, product));

	const removeItemFromCart = (product) =>
		setCartItems(removeCartItem(cartItems, product));

	const clearItemFromCart = (product) =>
		setCartItems(clearCartItem(cartItems, product))

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		removeItemFromCart,
		clearItemFromCart,
		cartItemCount,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};