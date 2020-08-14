import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {UserContext} from './contexts/ProductContext'

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
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
			</UserContext.Provider>
		</div>
	);
}

export default App;
