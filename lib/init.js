'use strict';

var $ = require('jquery');
var React = require('react');
var App = require('./components/app.react');

$(function () {
  React.renderComponent(new App(), document.body);
});