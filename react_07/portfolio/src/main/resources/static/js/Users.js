const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouterDOM = require("react-router-dom");
const Axios = require("axios");

class Users extends React.Component{
	constructor(props){
		super(props);
		this.state={
			"users":[]
		};
	}

	init(){
		Axios.get("/users")
		.then((data)=>{
			let users = data["data"];

			for(let i=0;i<users.length;i++){
				users[i] = (
					<tr key={users[i].id}>
						<td>{users[i].email}</td>
						<td>{users[i].firstName}</td>
					</tr>
				);
			}

			this.setState({
				"users":users
			});
		})
		.catch(err=>console.log(err));
	}	

	render(){
		if(this.state.users){
			return (
				<table>
					<thead>
						<tr>
							<th>Email:</th>
							<th>First Name:</th>
						</tr>
					</thead>

					<tbody>
						{this.state.users}
					</tbody>
				</table>
			);
		}
	}

	componentDidMount(){this.init();}
}

module.exports = Users;
