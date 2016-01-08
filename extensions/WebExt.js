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
            [' ', 'alert %s', 'alert', 'Hello'],
	    ['r', 'prompt %s', 'prompt', 'Are you well?'],
	    ['b', 'confirm %s', 'confirm', 'Are you having a good day?'],
	    ['-'],
	    ['r', 'project ID', 'ID'],
	    ['b', '%m.k', 'k', 'player'],
	    //['r', 'project type', 'type']
	    ['-'],
	    ['r', 'current URL', 'URL'],
	    [' ', 'open %s in new tab', 'newTab', 'http://scratch.mit.edu'],
	    ['f', 'open %s', 'current', 'http://scratch.mit.edu'],
	    [' ', 'open Scratch user page %s', 'user', 'Paddle2See'],
	    [' ', 'open Pastebin user page %s', 'paste', 'StarStudios23'],
	    ['-'],
	    ['r', 'tab name', 'tabName'],
	    [' ', 'set tab name to %s', 'set', 'Tab']
        ],

	menus: {
	    k: ['editor', 'player', 'fullscreen']
	}
    };
    ext.alert = function(string) {
	alert(string);
    };
    ext.prompt = function(string) {
	return prompt(string);
    };
    ext.confirm = function(string) {
	return confirm(string);
    };
    ext.ID = function() {
	return document.URL.substring(32, 40);
    };
    ext.k = function(m) {
	switch(m) {
	    case 'editor':
		return document.URL.substring(42, document.URL.length) == 'editor';
	    case 'player':
		return document.URL.length == 42 || document.URL.substring(42, document.URL.length) == 'player';
	    case 'fullscreen':
		return document.URL.substring(42, document.URL.length) == 'fullscreen';
	}
    };
    ext.type = function() {
	return document.URL.substring(42, document.URL.length);
    };
    ext.URL = function() {
	return document.URL;
    };
    ext.newTab = function(url) {
	window.open(url,'_blank');
    };
    ext.current = function(url) {
	if (confirm('Are you sure you want to go to ' + url + '?')) {
	    window.location = url;
	}
    };
    ext.user = function(username) {
	window.open('http://scratch.mit.edu/users/' + username, '_blank');
    };
    ext.paste = function(username) {
	window.open('http://pastebin.com/u/' + username, '_blank');
    };
    ext.tabName = function() {
	return document.title;
    };
    ext.set = function(name) {
	document.title = name;
    };

    ScratchExtensions.register('WebExt', descriptor, ext);
})({});