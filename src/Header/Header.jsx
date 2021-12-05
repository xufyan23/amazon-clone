import React from 'react';
import "./Header.css";
import {ReactComponent as Logo} from '../../src/images/amazon-logo.svg';
import {ReactComponent as Cart} from '../../src/images/shopping-cart.svg';
import {ReactComponent as Search} from '../../src/images/search.svg';
import {Link} from 'react-router-dom';
import {useStateValue} from "../../src/StateProvider";
import { auth } from '../firebase';


function Header() {
	const [{basket, user}] = useStateValue(); // it takes tow values state and dispatch. dispatch add thing into basket
	
	const login = () => {
		if(user) {
			auth.signOut();
		}
	}

	console.log(login)

	return (
		<header>
			<nav className="navbar">
				<Link to="/" className="navbar-brand"><Logo/></Link>
				<form>
					<input type="text" className="form-control"/>
					<button className="search"><Search /></button>
				</form>
				<div className="nav-right">
					<Link className="login" to={!user && "/login"}>
						<div onClick={login}>
							<small>Hello, {user?.email}</small>
							<div className="medium-text">{user ? "sing Out" : "Sign In"}</div>
						</div>
					</Link>
					<Link to="/">
						<small>Return</small>
						<div className="medium-text">& Orders</div>
					</Link>
					<Link to="/checkout" className="cart">
						<div className="counter">{basket?.length}</div>
						<Cart/>
						<span className="medium-text">Cart</span>
					</Link>
				</div>
			</nav>
		</header>
	);
}

export default Header;
