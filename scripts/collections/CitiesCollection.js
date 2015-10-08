var Backbone=require('backbone');
var CitiesModel=require('..models/CitiesModel');

module.exports=Backbone.Collection.extend({
	model: CitiesModel,
	url: 'http://tiyfe.herokuapp.com/collections/moryfr'
})