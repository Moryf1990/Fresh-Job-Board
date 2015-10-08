var React=require('react');
var Backbone=require('backbone');
var JobRowComponent=require('./JobRowComponent');
var InformationBoxComponent=require('./InformationBoxComponent');
var NavigationComponent=require('./NavigationComponent');

 var JobModel=require('../models/JobModel');

// var jobModel1=new JobModel({posts: 1, title: 'Senior Frontend Engineer', 
// description: 'Senior Frontend EngineerSolve Hard Problems With a Team of Infrastructure ProsNSONE is based in New York...', 
// company: 'NSONE', replies: 0, location: 'New York, NY', datePosted: 'yesterday'});

module.exports=React.createClass({
	render: function() {
		return (
			<div className="jobrow">
				<NavigationComponent />
				<JobRowComponent foo={this.props.foo} />
				<InformationBoxComponent />
			</div>
		)
	}
})