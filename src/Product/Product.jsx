import React from 'react';
import { useStateValue } from '../StateProvider';
import './Product.css';

function Product({id,name,price,rating,image}) {
	const [{}, dispatch] = useStateValue();
	const addToBasket = () => {
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				name: name,
				price: price,
				rating: rating,
				image: image
			}
		})
	}
	return (
		<div className="card">
			<h2 className="name">{name}</h2>
			<p className="price"><small>$</small>{price}</p>
			<div className="rating">
				{	

					Array(rating)
					.fill()
					.map((_) =>(
						<span>⭐</span>
					))
				}
			</div>
			<div className="product-img">
				<img src={image} alt=""/>
			</div>
			<div className="action-btn">
				<button onClick={addToBasket}className="btn-primary">Add to basket</button>
			</div>
		</div>
	)
}

export default Product;

/* [product id, name, price, rating, image] */
