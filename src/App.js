import {
	BrowserRouter as Router,
	Switch,
	Route}
from "react-router-dom"
import './Components/CounterExample'
import Navigation from './Components/Navigation';

import './style/style.css'

import Header from './Views/Header'
import Home from './Views/Home'
import Projects from './Views/Projects'
import Qualifications from './Views/Qualifications'
import Contact from './Views/Contact'
import LinkTree from './Views/Linktree'

function App() {
  return (
	<div className="App h-100" style={{backgroundColor: 'white'}}>
		<Router>
			<Navigation />

			<Header></Header>

			<Switch>
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

				<Route exact path="/linktree">
					<LinkTree/>
				</Route>
			</Switch>
		</Router>
	</div>

  );
}

export default App;
