class Root extends React.Component{
	constructor(props){
		super(props);

		this.state={
			title:"Root",
			header:"Header",
			body:"Body",
			footer:"Footer"
		};
	}

	render(){
		return (
			<div className="root">
				<h1>{this.state.title} Component!</h1>
				<Header stuff={this.state.header} />
				<Body stuff={this.state.body} />
				<Footer stuff={this.state.footer} />
			</div>
		);
	}
}

ReactDOM.render(<Root/>,document.getElementById("App"));