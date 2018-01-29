class Body extends React.Component{
	constructor(props){
		super(props);
	}

	toParent(){
		let input = document.getElementById("name").value;

		this.props.cb(input);
	}

	render(){
		return (
			<div className="Body">
				<button onClick={()=>{this.toParent()}}>Click Me!</button>
				<input id="name" type="text" />
			</div>
		);
	}
}