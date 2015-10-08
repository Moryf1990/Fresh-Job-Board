var Backbone=require('backbone');

module.exports=Backbone.Model.extend({
	defaults: {
		location: '',
		companyName: '',
		salary: ''
	}
})