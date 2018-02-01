const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouterDOM = require("react-router-dom");
const app = document.getElementById("app");

console.log(ReactRouterDOM);

const Router = ReactRouterDOM.HashRouter;
const Route  = ReactRouterDOM.Route;
const Link   = ReactRouterDOM.Link;

const Projects = require("./Projects.js");

class App extends React.Component{
	constructor(props){
		super(props);
		this.state={};
	}

	render(){
		return (
			<Router>
				<div>
					<Route path="/projects" component={Projects} />

					<Link to="/projects" >My Projects</Link>
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<App/>,app);