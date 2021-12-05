import React from 'react';
import "./Subtotal.css";
import { useStateValue } from '../StateProvider';

function Subtotal() {
	const [{ basket, total }] = useStateValue();
	return (
		<div>
			<div className="subtotal-block">
				<div d-flex>
					<h2>Total</h2>
					<div><small>$</small>{total}</div>
				</div>
				<div>

					<button className="btn-primary">Proceed To Check</button>
				</div>
			</div>
		</div>
	)
}

export default Subtotal;
