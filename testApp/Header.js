class Header extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="Header">
				<h1>{this.props.stuff}</h1>
			</div>
		);
	}
}