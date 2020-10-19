import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
// import logo from './logo.svg';
import Greet  from './components/Greet'
// import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import VRViz from "vr-viz"
import mapData from './mapData/mapData.json'
import sfMapData from './mapData/sfMapData.json'

function App() {
	return (
		<HashRouter>
			<div className="App">
				<nav class="navbar navbar-expand-sm bg-light">
				  <ul class="navbar-nav">
				    <li class="nav-item">
				      <a class="nav-link" href="#"><NavLink to="/">Data Distribution</NavLink></a>
				    </li>
				    <li class="nav-item">
				      <a class="nav-link" href="#"><NavLink to="/hello">Trend Analysis</NavLink></a>
				    </li>
				    <li class="nav-item">
				      <a class="nav-link" href="#"><NavLink to="/message">Data Exploration</NavLink></a>
				    </li>
				  </ul>

				</nav>

            	<div className="content">
		            <Route exact path="/" component={Greet}/>
		            <Route path="/hello" component={Hello}/>
		            <Route path="/message" component={Message}/>
		        </div>
			</div>
		</HashRouter>
	);

}

	export default App;
