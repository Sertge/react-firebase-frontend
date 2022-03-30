import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useEffect, useState } from 'react';
import UsersList from './components/UserList';

function App() {
	const [auth, setAuth] = useState(
		false || window.localStorage.getItem('auth') === 'true'
	);
	const [token, setToken] = useState('');

	useEffect(() => {
		firebase.auth().onAuthStateChanged((userCred) => {
			if (userCred) {
				setAuth(true);
				window.localStorage.setItem('auth', 'true');
				userCred.getIdToken().then((token) => {
					setToken(token);
				});
			}
		});
	}, []);

	const handleCreate = () => {

	}

	const handleDelete = () => {

	}

	const handleEdit = () => {}

	const loginWithGoogle = () => {
		firebase
			.auth()
			.signInWithPopup(new firebase.auth.GoogleAuthProvider())
			.then((userCred) => {
				if (userCred) {
					setAuth(true);
					window.localStorage.setItem('auth', 'true');
				}
			});
	};

	return (
		<div className="App">
			{auth ? (<>
				<UsersList token={token} handleEdit={handleEdit} handleDelete={handleDelete} />
				<button onClick={handleCreate}>Create New User</button>
			</>
			) : (
				<>
					<button onClick={loginWithGoogle}>Login with Google</button>
					<p>Also you can login with email and password</p>
					<input type={'text'}/>
					<input type={'password'}/>
				</>
			)}
		</div>
	);
}

export default App;
