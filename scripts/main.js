'use strict';

var React=require('react');
var JobTipsComponent = require('./components/JobTipsComponent.js');
var JobFormComponent = require('./components/JobFormComponent.js');
var NavigationComponent = require('./components/NavigationComponent.js');
var AddJob = require('./components/AddJobComponent');
var containerEl = document.getElementById('main-content')


React.render(<div>
				<AddJob />
			</div>
			, containerEl);