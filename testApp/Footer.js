class Footer extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="Footer">
				<h1>{this.props.title}</h1>			
			</div>
		);
	}
}