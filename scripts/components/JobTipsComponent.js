var React = require('react');
var Backbone=require('backbone');
var JobFormComponent = require('./JobFormComponent.js');

module.exports=React.createClass ({
	render: function() {
		return (
			<div className="col-sm-6">	
				<div id="TipsId">			
					<h3 className="tipsheader">Tips for your job posting</h3>
					<p className="tipsparagraph"><strong>Add Keywords</strong> because the majority of
					candidates search for available positions using keywords, make sure you use all relevant 
					keywords in your posting</p>
					<p className="tipsparagraph"><strong>Use Familiar Job Titles.</strong> Use specific but 
					familiar job titles in your postings. Make sure the titles are clear and succint.</p>
					<p className="tipsparagraph"><strong>Give Them Details.</strong> The purpose of posting a job
					is to spark a candidate's interest in the available position. When job postings have detailed
					descriptions candidates tend to apply to them more.</p> 
					<p className="tipsparagraph"><strong>Expand Your Location </strong> Do not limit your job posting to a 
					restricted area around the job's location. Make sure to include surrounding cities and metropolitan
					areas in your searches.
					</p>
					<p className="tipsparagraph"><strong>Discuss Compensation</strong> Even though you may not want to 
					give an exact compensation, give a range. Make sure to point out any bonuses, commissions, or 
					non-monetary compensation, as well. 
					</p>
				</div>						
			</div>
		);
	}
});