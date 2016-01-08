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
            msg: 'Installed'
        }
    };

    var descriptor = {
        blocks: [
            ['r', 'letters %n to %n of %s', 'to', 0, 5, 'Hello, World!'],
	    ['r', 'replace %s with %s in string %s', 'replace', 'Goodbye', 'Hello', 'Goodbye, World!'],
	    ['b', '%s contains %s?', 'contains', 'Hello, World!', 'Hello'],
	    ['-'],
	    ['r', '%s to upper case', 'tuc', 'hello, world!'],
	    ['r', '%s to lower case', 'tlc', 'HELLO, WORLD!'],
	    ['b', '%s is %m.may', 'case', 'hello, world!', 'lower case'],
	    ['r', 'delete %s of %s', 'del', 'Oh ', 'Oh Hello, World!']
        ],

	menus: {
	    may: ['upper case', 'lower case'],
	}
    };
    ext.to = function(start, end, string) {
	return string.substring(start, end);
    };
    ext.replace = function(substr, replacer, str) {
	return str.replace(substr, replacer);
    };
    ext.contains = function(str, substr) {
	return str.indexOf(substr);
    };
    ext.tuc = function(str) {
	return str.toUpperCase();
    };
    ext.tlc = function(str) {
	return str.toLowerCase();
    };
    ext.case = function(str, m) {
	switch(m) {
	    case 'upper case':
		return str === str.toUpperCase();
	    case 'lower case':
		return str === str.toLowerCase();
	}
    };
    ext.del = function(substr, str) {
	return str.replace(substr, '');
    };

    ScratchExtensions.register('StringExt', descriptor, ext);
})({});