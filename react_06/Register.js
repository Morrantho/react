class Register extends React.Component{
	constructor(props){
		super(props);
		
		this.state={
			firstName:""
		};
	}

	submit(event){
		console.log(this.state.firstName);

		event.preventDefault();
		return false;
	}

	setFirstName(event){		
		this.setState({
			firstName:event.target.value
		});
	}


	render(){
		return (
			<form onSubmit={()=>{this.submit();}}>
				<input
					onChange={(e)=>{this.setFirstName(e);}}
					value={this.state.firstName}
					type="text"
				/>
								
				<input type="submit" />
			</form>
		);
	}
}