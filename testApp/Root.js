const App = document.getElementById("app");

class Root extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title:"Root Component",
			stuff:null
		};
	}

	init(){
		axios.get("https://pokeapi.co/api/v2/pokemon/2")
		.then((data)=>{
			this.setState({data:data.data});
		})
		.catch((err)=>{
			console.log(err);
		});
	}

	update(data){
		this.setState({
			"stuff":data
		});
	}

	render(){
		return (
			<div>
				<h1>{this.state.title}</h1>
				<Header stuff={this.state.stuff}/>
				<Body cb={(data)=>{this.update(data);}}/>
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<Root/>,App);