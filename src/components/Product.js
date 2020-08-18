import React from 'react';

const Product = props => {


	const addItems = ()=>{
		props.addItem(props.product)
	}
	return (
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>

			<button onClick={addItems}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
