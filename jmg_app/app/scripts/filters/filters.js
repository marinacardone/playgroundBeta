'use strict';

var wisable = angular.module('wisableApp');

wisable.filter('decodeURIComponent', function() {
    return window.decodeURIComponent;
});
wisable.filter('newlines', function () {
    return function(text) {
    	var formatedText = '<p>';
    		formatedText += text.replace(/\n/g, '</p><p>');
    		formatedText += '</p>'
        return formatedText;
    }
});