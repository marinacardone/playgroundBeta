'use strict';

angular.module('wisableApp')
	.filter('decodeURIComponent', function() {
    return window.decodeURIComponent;
})
	.filter('newlines', function () {
    return function(text) {
    	var formatedText = '<p>';
    		formatedText += text.replace(/\n/g, '</p><p>');
    		formatedText += '</p>'
        return formatedText;
    }
})
	.filter('truncateon', function (){
	return function (value, max, tail) {
	    if (!value) return '';

	    max = parseInt(max, 10);
	    if (!max) return value;
	    if (value.length <= max) return value;

	    value = value.substr(0, max);
	        var lastspace = value.lastIndexOf(' ');
	        if (lastspace != -1) {
	            value = value.substr(0, lastspace);
	        }

	    return value + (tail || ' …');
	}
});