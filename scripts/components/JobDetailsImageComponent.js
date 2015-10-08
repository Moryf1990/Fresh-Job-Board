var React=require('react');
var Backbone=require('backbone');

module.exports=React.createClass({
	render: function() {
		return (
			<div className="col-sm-4">
				<section className="pictureSection">
					<h1 className="pictureHeader">Featured Company</h1>
					<div className="informationBorder"></div>
					<img src="https://github.com/TIY-Austin-Front-End-Engineering/fresh-job-board-views/blob/master/images/featured.jpg?raw=true"  className="featured"/>
					<img src="https://github.com/TIY-Austin-Front-End-Engineering/fresh-job-board-views/blob/master/images/featured-logo.jpg?raw=true" className="featuredlogo"/>
					<div className="informationMax">MaxPlay</div>
					<div className="informationLocation">Austin, TX</div>
			    </section>
			</div>
		)
	}
})