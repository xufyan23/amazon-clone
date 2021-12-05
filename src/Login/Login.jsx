import {useState} from 'react'
import {ReactComponent as Logo} from '../../src/images/amazon-logo-black.svg';
import "./Login.css";
import {Link, useHistory} from 'react-router-dom';
import { auth } from '../firebase';


function Login() {
	const  history = useHistory()
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const login = event => {
		event.preventDefault();
		auth.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
			})
			.catch((e) => alert(e.message));
	}

	const register = event => {
		event.preventDefault()
		auth.createUserWithEmailAndPassword(email,password)
		.then((auth) => {
			history.push("/");
		})
		.catch((e) => alert(e.message));
	}
	return (
		<div className="login-wrapper">
			<div className="text-center">
				<Link to="/"> <Logo/> </Link>
			</div>
			<form>
				<h1>Sign-In</h1>
				<div className="form-group">
					<label>Email or mobile phone number</label>
					<input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
				</div>
				<div className="form-group">
					<label>Enter Password</label>
					<input type="password" className="form-control" vaue={password} onChange={(e) => setPassword(e.target.value)}/>
				</div>
				<button type="submit" onClick={login} className="btn-primary">LOGIN</button>
				<p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
				<div>
					<button type="submit" onClick={register} className="btn-default">CREATE YOUR ACCOUNT</button>
				</div>
			</form>	
		</div>
	)
}

export default Login;
