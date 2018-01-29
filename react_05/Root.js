class Root extends React.Component{
	constructor(props){
		super(props);

		this.state={
			title:"Mama",
			header:"Header",
			body:"Body",
			footer:"Footer"
		};
	}

	answer(){
		this.setState({
			"reply":"Goto bed, you have school tomorrow.",
		});

		window.setTimeout(()=>{
			this.setState({
				"sibling":"Yea, goto bed bro."
			});
		},2000);

		window.setTimeout(()=>{
			this.setState({
				"response":"Alright, geez."
			});
		},4000);
	}

	render(){
		return (
			<div className="root">
				<h1>{this.state.title}</h1>
				<h1>{this.state.reply}</h1>
				<Header reply={this.state.sibling} stuff={this.state.header} />
				<Body reply={this.state.response} callMama={()=>{this.answer();}} stuff={this.state.body} />
				<Footer stuff={this.state.footer} />
			</div>
		);
	}
}

ReactDOM.render(<Root/>,document.getElementById("App"));