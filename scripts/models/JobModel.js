var Backbone=require('backbone');

module.exports=Backbone.Model.extend({
	defaults: {
		posts: 0,
		title: '',
		description: '',
		company: '',
		replies: 0,
		location: '',
		datePosted: ''
	},
	idAttribute: '_id',
	urlRoot: 'http://tiyfe.herokuapp.com/collections/moryfr'
});