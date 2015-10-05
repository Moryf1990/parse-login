'use strict';
var React = require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;
Parse.initialize('OAin30pjfN6VbrDGkSeEq7SZ1YCWGj6mlppw8cGS', 'XUehvIhPzP0B5E83CMBuxuYF6b31WyqGxYqA4BSx');


var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var DashboardComponent = require('./components/DashboardComponent');
var LoginComponent = require('./components/LoginComponent');
var RegisterComponent = require('./components/RegisterComponent');

var app = document.getElementById('app');

React.render(
	<NavigationComponent />,
	document.getElementById('nav')
);

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'dashboard': 'dashboard',
		'login': 'login',
		'register': 'register'
	},
	home: function() {
		React.render(<HomeComponent />, app);
	},
	dashboard: function() {
		console.log(Parse.User.current() );
		if (Parse.User.current()) {
			React.render(<DashboardComponent />, app);
		}
		 else { 
		 	React.render(<LoginComponent router={r} />, app);
		}
	},
	login: function() {
		React.render(<LoginComponent router={r} />, app);
	},
	register: function() {
		React.render(<RegisterComponent router={r} />, app);
	}
});

var r = new Router();
Backbone.history.start();