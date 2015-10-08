'use strict';

var React=require('react');
var Backbone=require('backbone');
var AddJobComponent=require('./components/AddJobComponent');
var JobListComponent=require('./components/JobListComponent');
var JobDetailsComponent=require('./components/JobDetailsComponent');
var MainContent=document.getElementById('main-content');
var JobCollection=require('./collections/JobCollection');




var collection = new JobCollection({

})

var Router=Backbone.Router.extend({
	routes: {
			'': 'home',
			'jobs': 'JobList',
			'companies': 'JobDetails'
		},

		home: function() {
			React.render(
				<AddJobComponent collection={collection} r={this} />,
				MainContent
			);
		},

		JobList: function() {
			React.render(
				<JobListComponent foo={collection} v={this} />,
				MainContent
			);
		},

		JobDetails: function() {
			React.render(
				<JobDetailsComponent />,
				MainContent
			);
		},
});

var r = new Router();
Backbone.history.start();