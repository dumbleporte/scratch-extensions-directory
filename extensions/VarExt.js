// ==UserScript==
// @name       Extension - Scratch
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
            msg: 'Unstable'
        }
    };
    var varHolder = {
};

    var descriptor = {
        blocks: [
	    [' ', 'create var %s and set it to %s', 'set', 'var', '0'],
	    [' ', 'change var %s by %n', 'change', '', 1],
	    ['r', '%s', 'get', '']
        ],

	menus: {
	}
    };
    ext.set = function(variable, val) {
	console.log("set");
	varHolder[variable] = val;
    };
    ext.change = function(variable, val) {
	console.log("change");
	varHolder[variable] = varHolder[variable] + val;
    };
    ext.get = function(variable) {
	console.log("get");
	return varHolder[variable];
    };

    ScratchExtensions.register('VarExt', descriptor, ext);
})({});