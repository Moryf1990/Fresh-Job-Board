var React = require('react');
var NavigationComponent = require('./NavigationComponent');
var Backbone=require('backbone');
var JobModel=require('../models/JobModel');


module.exports=React.createClass({
	render: function() {
		return (
				<form className="col-sm-6" onSubmit = {this.onJobModel}>
					<div className="JobFormComponentId">
						<h3 className="formheader">Post your job</h3>
						<h3 className="formtitles">Title</h3>
						<input className="forminput" ref="title"></input>
						<h3 className="formtitles">Company Name</h3>
						<input className="forminput" ref="company"></input>
						<h3 className="formtitles">Location</h3>
						<input className="forminput" ref="location"></input>
						<h3 className="formtitles">Description</h3>
						<input className="descriptioninput" ref="description"></input>
						<h3 className="formtitles">Tags</h3>
						<input className="forminput"></input>					
						<button className="submit">Submit Job</button>
					</div>
				</form>
		);
	},
	onJobModel: function(e) {
		e.preventDefault();
		this.props.collection.add({
			title: this.refs.title.getDOMNode().value,
			company: this.refs.company.getDOMNode().value,
			location: this.refs.location.getDOMNode().value,
			description: this.refs.description.getDOMNode().value

		});
		this.props.r.navigate('jobs', {trigger: true});
	}

});