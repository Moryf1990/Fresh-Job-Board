var React=require('react');
var Backbone=require('backbone');

module.exports=React.createClass({
	render: function() {
		return (
			<div className="col-sm-12">
				<ul className="ul">
					<li className="list2"><img src="https://github.com/TIY-Austin-Front-End-Engineering/fresh-job-board-views/blob/master/images/logo.png?raw=true" className="image" /></li>
					<li className="list1">FRESH JOBS</li>
					<li className="list"><a href="#jobs">JOBS</a></li>
					<li className="list"><a href="#companies">COMPANIES</a></li>
					<li className="list"><a href="#">CITIES</a></li>
					<li className="list"><a href="#">WHY FRESH?</a></li>
					<li className="list"><a href="#">FOR EMPLOYERS</a></li>
				</ul>
			</div>
		)
	}
})