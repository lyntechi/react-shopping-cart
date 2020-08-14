import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {UserContext} from './contexts/ProductContext'
import {CartContext} from './contexts/CartContext'
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart(item)
		
	};
	console.log(cart)
	return (
		<div className="App">
			<UserContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={{cart}}><Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
			</CartContext.Provider>
			</UserContext.Provider>
		</div>
	);
}

export default App;
