import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function UsersList({ token, handleEdit, handleDelete }) {
	const [users, setUsers] = useState([])
	useEffect(() => {
		if (token) {
			fetchData(token);
		}
	}, [token]);

	const fetchData = async (token) => {
		await axios.get('http://localhost:5001/sertge-testing1/us-central1/api/users', {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		}).then((res)=> {
			console.log(res.data);
			setUsers(res.data.users)
		});
	};

	return (
		<div style={{width:'100%'}}>
			<h1>List of users</h1>
			{ users 
				? users.map((user)=> {return (
					<div style={{width:'80%', display:'flex', flexDirection:'row', alignItems:'center' }} key={user.uid}>
						<div style={{flex:'3'}}>{user.email} {user.role}</div>
						<button onClick={handleEdit} style={{flex:'1'}}>Edit</button>
						<button onClick={handleDelete} style={{flex:'1', background:'red'}}>Delete</button>
					</div>
				)}) 
				: '' 
			}
		</div>
	);
}
