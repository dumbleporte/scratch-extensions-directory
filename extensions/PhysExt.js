// ==UserScript==
// @name       Physics Extension - Scratch
// @namespace  http://scratch.mit.edu
// @version    2.0
// @description  An extension for scratch. By starstudios23. Thanks Grannycookies for helping.
// @match      *://scratch.mit.edu/projects/*
// @author starstudios23
// ==/UserScript==

(function(ext) {
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {
            status: 2,
            msg: 'Installed'
        }
    };

    var descriptor = {
        blocks: [
            ['r', 'yBounce range: %n cosBy: %n', 'yBounce', 50, 0],
	    ['r', 'xBounce range: %n sinBy: %n', 'xBounce', 50, 0]
        ],

	menus: {
	    math: ['≥', '≤', 'not equal to']
	}
    };
    ext.yBounce = function(range, cosBy) {
	return range * Math.cos(cosBy);
    };
    ext.xBounce = function(range, sinBy) {
	return range * Math.sin(sinBy);
    };

    ScratchExtensions.register('PhysExt', descriptor, ext);
})({});