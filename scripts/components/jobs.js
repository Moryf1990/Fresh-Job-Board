var React=require('react');

module.exports=React.createClass({
	render: function() {
		return (
			<div>
				<h1>{this.props.job.get('datePosted')}</h1>
				<h1>{this.props.job.get('title')}</h1> 
				<div>{this.props.job.get('company')} * {this.props.job.get('location')}</div>
				<div>{this.props.job.get('description')}</div>
			</div>
		)
	}

})