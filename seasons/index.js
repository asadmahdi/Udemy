import REACT from 'react';
import ReactDOM from 'react-dom';

//import faker from 'faker';
//import CommentDetail from './CommentDetail';
//import ApprovalCard from './ApprovalCard';

//require is for CommonJS Modules
// import is for ES2015 Modules

//npm start inside create react app project






class App extends REACT.Component {


	constructor(props){
		//first function called when component is created
		super(props);

		//only time direct assignment to state is ok
		this.state = { lat: null };

		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({ lat: position.coords.latitude});
			},
			(err) => {
				this.setState({ errorMessage : err.message })
			}
			);
	}

	render(){

		//const buttonText = 'Click me!';


		if(this.state.errorMessage && !this.state.lat)
			return  <div> Error: {this.state.errorMessage} </div>;
		if(!this.state.errorMessage && this.state.lat)
			return <div > Latitude: { this.state.lat}  </div>;
		return <div > Loading </div>;
		

	}
}

ReactDOM.render(
	<App/>,
	document.querySelector('#root')
	);


