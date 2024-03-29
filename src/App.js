import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect}
from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Views/main/Header'
import Home from './Views/main/Home'
import Projects from './Views/main/Projects'
import Qualifications from './Views/main/Qualifications'
import Contact from './Views/main/Contact'

import ServicesWebsite from './Views/main/ServicesWebsite'
import ServicesLogo from './Views/main/ServicesLogo'
import ServicesHelp from './Views/main/ServicesItHelp'

function App() {

  return (
	<div className="App h-100" style={{backgroundColor: 'white'}}>
		<Router>

			<Header></Header>

			<Switch>
				<Route exact path='/'>
					<Redirect to="/Home" />
				</Route>
				<Route exact path="/Home">
					<Home/>
				</Route>

				<Route exact path="/projects">
					<Projects/>
				</Route>

				<Route exact path="/qualifications">
					<Qualifications/>
				</Route>

				<Route exact path="/contact">
					<Contact/>
				</Route>


				<Route exact path="/serviceswebsite">
					<ServicesWebsite/>
				</Route>

				<Route exact path="/serviceslogo">
					<ServicesLogo/>
				</Route>

				<Route exact path="/serviceshelp">
					<ServicesHelp/>
				</Route>
			</Switch>
		</Router>
	</div>

  );
}

export default App;
