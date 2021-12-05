import React from 'react';
import { useStateValue } from '../src/StateProvider';

function CheckoutProducts({ id, name, price, rating, image }) {
	const [{ basket }, dispatch] = useStateValue();
	console.log(id)
	const removeItem = () => {
		// const removeBasket = basket.filter(data => data.id !== id);
		// console.log(id)
		
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id
		})
	}
	return (
			<div className="">
				<h2 className="name">{name}</h2>
				<p className="price"><small>$</small>{price}</p>
			<div className="rating">
				{

					Array(rating)
						.fill()
						.map((_) => (
							<span>⭐</span>
						))
				}
			</div>
			<div className="product-img">
				<img src={image} alt="" />
			</div>
			<div className="action-btn">
				<button onClick={removeItem} className="btn-primary">Remove from basket</button>
			</div>
			</div>

	)
}

export default CheckoutProducts;
