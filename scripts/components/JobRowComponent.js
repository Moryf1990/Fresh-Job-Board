var React=require('react');
var Backbone=require('backbone');
var jobs=require('./jobs');
var JobData=require('../data/JobData');
var JobForm=require('./JobFormComponent');

module.exports=React.createClass({
	render: function() {
		var allJobForms=this.props.foo.map(function(v) {
			return(
			<div>

				<div className="JobRowBorder"> </div>
				<div className="JobRowContent">	
					<h1 className="datePosted">{v.get('datePosted')}</h1>					
					<h1 className="title">{v.get('title')}</h1> 
					<div className="location">{v.get('company')} * {v.get('location')}</div>
					<div className="description">{v.get('description')}</div>
					<button className="button">angularjs</button><button className="button">d3.js</button><button className="button">javascript</button><button className="button">ui</button><button className="button">css</button>
		        </div>
		      </div>
		     );
		});
		return (
			<div className="col-sm-8" id="JobRowId">
				<h3 className="JobRowHeader1">Keywords</h3><h3 className="JobRowHeader2">Location</h3>
				<div>
					<input className="JobInput1"> </input> <input className="JobInput2"> </input> <button className="JobRowButton">Search</button>
				</div>	
				{allJobForms}
			</div>
		);
	}
});