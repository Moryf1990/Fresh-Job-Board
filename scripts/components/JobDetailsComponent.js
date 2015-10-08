var React=require('react');
var Backbone=require('backbone');
var JobDetailsPageComponent=require('./JobDetailsPageComponent');
var JobDetailsImageComponent=require('./JobDetailsImageComponent');
var NavigationComponent=require('./NavigationComponent'); 

module.exports=React.createClass({
	render: function() {
		return (
			<div className="jobDetailsRow">
				<NavigationComponent />
				<JobDetailsPageComponent />
				<JobDetailsImageComponent />
			</div>
		)
	}
})