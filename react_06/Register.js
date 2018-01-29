class Register extends React.Component{
	constructor(props){
		super(props);
		
		this.state={
			firstName:"",
			lastName:""
		};
	}

	submit(event){
		console.log(this.state.firstName);
		event.preventDefault();
	}

	change(event){

	}

	render(){
		return (
			<form onSubmit={this.submit}>
				<input
					value={this.state.firstName}
					type="text"
				/>
								
				<input type="submit" />
			</form>
		);
	}
}