let myDiv = document.getElementById("helloWorld");

class Hello extends React.Component{
	render(){
		return (
			<h1>Hello World!</h1>
		);
	}
}

ReactDOM.render(<Hello/>,myDiv);