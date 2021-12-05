import React from 'react';
import Product from './Product/Product';
const items = [
	{
		id:1,
		name: 'Fujifilm X-E3 Mirrorless Digital Camera w/XF18-55mm Lens Kit',
		price: 300,
		rating: 3,
		image: 'https://images-na.ssl-images-amazon.com/images/I/51TznfhXH5L._AC_SR400,600_.jpg'
	},
	
	{
		id:2,
		name: 'Manfrotto PIXI Mini Tripod, Black (MTPIXI-B)Review Star Icon ',
		price: 15,
		rating: 5,
		image: 'https://images-na.ssl-images-amazon.com/images/I/31ISCXijEvL._AC_SR400,600_.jpg'
	},
	
	{
		id:3,
		name: 'Rokinon 35mm F1.8 Auto Focus Compact Full Frame Wide Angle',
		price: 242,
		rating: 4,
		image: 'https://images-na.ssl-images-amazon.com/images/I/31V1WRK-Q6L._AC_SR400,600_.jpg'
	},
	
]

function Products() {
	return (
		<div className="product-wrapper">
			{
				items.map(item => (
					<Product id={item.id} name={item.name} price={item.price} rating={item.rating} image={item.image}/>
				))
			}
		</div>
	)
}

export default Products

