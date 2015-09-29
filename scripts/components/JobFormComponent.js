var React = require('react');
var NavigationComponent = require('./NavigationComponent.js');

module.exports=React.createClass({
	render: function() {
		return (
			<div>
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

		);
	}
});