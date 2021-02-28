import {
	BrowserRouter as Router,
	Switch,
	Route}
from "react-router-dom"
import './Components/CounterExample'
import Navigation from './Components/Navigation';


import Header from './Views/main/Header'
import Home from './Views/main/HomeCopy'
import Projects from './Views/main/Projects'
import Qualifications from './Views/main/Qualifications'
import Contact from './Views/main/Contact'
import LinkTree from './Views/main/Linktree'

function App() {
  return (
	<div className="App h-100" style={{backgroundColor: 'white'}}>
		<Router>
			<Navigation/>

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
