var React=require('react');
var Backbone=require('backbone');

module.exports=React.createClass({
	render: function() {
		return (
			<div className="col-sm-4">
				<section className="informationbox">
					<h1 className="informationHeader">Looking for a job?</h1>
					<div className="informationBorder"></div>
					<h3 className="informationTitle">Create a Fresh Jobs profile and <strong>let employers come to you.</strong></h3>
					<ul className="informationList">
						<li>Employers search our database and contact you</li>
						<li>Import easily from Linkedin</li>
						<li>Link to Stack Overflow, Github, Codeplex and more</li>
					</ul>
					<button className="informationButton">Create a Profile</button>
				</section>

				<section className="pictureSection">
					<h1 className="pictureHeader">Featured Company</h1>
					<div className="informationBorder"></div>
					<img src="https://github.com/TIY-Austin-Front-End-Engineering/fresh-job-board-views/blob/master/images/featured.jpg?raw=true"  className="featured"/>
					<img src="https://github.com/TIY-Austin-Front-End-Engineering/fresh-job-board-views/blob/master/images/featured-logo.jpg?raw=true" className="featuredlogo"/>
					<div className="informationMax">MaxPlay</div>
					<div className="informationLocation">Austin, TX</div>
				</section>
			</div>
		);
	}
});