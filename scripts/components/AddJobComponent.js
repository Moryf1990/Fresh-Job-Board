var React=require('react');
var JobFormComponent=require('./JobFormComponent');
var JobTipsComponent=require('./JobTipsComponent');
var NavigationComponent=require('./NavigationComponent');
var Backbone=require('backbone');

module.exports=React.createClass({
	render: function() {
		return (
			<div className="container">
					<NavigationComponent />
					<JobFormComponent collection={this.props.collection} r={this.props.r} />
					<JobTipsComponent /> 							
			</div>
		)
	}
});
				
			
			
		   