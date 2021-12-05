import React from 'react';
import './Checkout.css';
import { useStateValue } from '../StateProvider';
import CheckoutProducts from '../CheckoutProducts';
import Subtotal from '../Subtotal/Subtotal';


function Checkout() {
	const [{basket, total}] = useStateValue();
	return (
		<div className="checkout">
			<div class="item-block">
			{
				basket.length ? (
					<div>
						<h2 className="text-center">Your  shopping basket has {basket.length} item</h2>
						<div className="card">
							{
								basket.map(item => (
									<CheckoutProducts id={item.id} name={item.name} image={item.image} price={item.price} rating={item.rating}/>
								))
							}
							{
								console.log(basket)
							}
						</div>
					</div>
				)
				:
				(
					<div>
						<h2 className="text-center">Your cart is empty </h2>
					</div>
				)
			}
			</div>
			<Subtotal/>
		</div>
	)
}

export default Checkout;
