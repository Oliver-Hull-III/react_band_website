import React from 'react';
import { Link } from 'react-router-dom';


const divStyle = {
	background: 'rgba(7,3,41, 0.9)',
	color: 'rgb(87, 50, 173)',

};
const Home = () => (
	<div className="jumbotron" style={divStyle}>
		<h1 className="display-4"> New EP coming soon! </h1>
		<Link to="/music/rose" href="https://monkeybitemusic.com/music/rose"> Listen to the first Single</Link>
	</div>
);

export default Home;

