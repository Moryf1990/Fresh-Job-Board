var React=require('react');

module.exports=React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="col-sm-12">
					<ul className="ul">
						<li className="list"><img src="https://github.com/TIY-Austin-Front-End-Engineering/fresh-job-board-views/blob/master/images/logo.png?raw=true" className="image" /></li>
						<li className="list1">FRESH JOBS</li>
						<li className="list"><a href="#">JOBS</a></li>
						<li className="list"><a href="#">COMPANIES</a></li>
						<li className="list"><a href="#">CITIES</a></li>
						<li className="list"><a href="#">WHY FRESH?</a></li>
						<li className="list"><a href="#">FOR EMPLOYERS</a></li>
					</ul>
				</div>

				<div className="row">
					<div className="col-sm-6">
						<h3 className="formheader">Post your job</h3>
						<h3 className="formtitles">Title</h3>
						<input className="forminput"></input>
						<h3 className="formtitles">Company Name</h3>
						<input className="forminput"></input>
						<h3 className="formtitles">Location</h3>
						<input className="forminput"></input>
						<h3 className="formtitles">Description</h3>
						<input className="descriptioninput"></input>
						<h3 className="formtitles">Tags</h3>
						<input className="forminput"></input>					
						<button className="submit">Submit Job</button>
					</div>

					<div className="col-sm-6">				
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
			</div>
		)
	}
})