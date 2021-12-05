export const initialState = {
	basket: [],
	user: null,
	total: 0,
};

const reducer =(state, action) =>{
	console.log(action)
	switch (action.type) {
		case "SET_USER":
				return {
					...state,
					user: action.user
				}
		case 'ADD_TO_BASKET':
				return {
				...state,
				basket: [...state.basket, action.item],
				total: state.total + action.item.price
			}

		case 'REMOVE_FROM_BASKET':
			const removeBasket = state.basket.filter(data => data.id !== action.id);
			const removeItem = state.basket.find(item => item.id === action.id)
			return {
				...state,
				basket: removeBasket,
				// basket: action.basket,
				total: state.total - removeItem.price
			}

		default:
			return state;
	}
}

export default reducer
