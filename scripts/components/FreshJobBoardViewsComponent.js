var React=require('react');
var Backbone=require('backbone');
var AddJobComponent=require('./AddJobComponent');
var JobListComponent=require('./JobListComponent');
var JobDetailsComponent=require('./JobDetailsComponent');

module.exports=React.createClass({
	render: function() {
		return (
			
			<div className="FreshJobBoardcontainer">

				<div className="FreshJobBoardrow">
					<AddJobComponent />
					<JobListComponent />
					<JobDetailsComponent />									
				</div>		
			</div>
		)
	}
})