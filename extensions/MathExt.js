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
            ['b', '%n is between %n & %n', 'between', 2, 1, 10],
            ['r', '%n * pi', 'pi', 2],
	    /*['b', '%n ≥ %n', 'gte', 10, 1],
	    ['b', '%n ≤ %n', 'lte', 1, 10],
	    ['b', '%n not equal to %n', 'ne', 1, 12],*/
	    ['-'],
	    ['b', '%n %m.math %n', 'mathMenu', '', '≥', ''],
	    ['-'],
	    ['r', 'get circumference of circle, radius: %n px', 'radii', 5],
	    ['r', 'get hypotenuse of of triangle, h: %n px, w: %n', 'hypot', 1, 1],
	    ['-'],
	    ['b', '%n can go evenly into %n', 'even', 2, 4]
        ],

	menus: {
	    math: ['≥', '≤', 'not equal to']
	}
    };
    ext.between = function(num1, num2, num3) {
        return num1 > num2 && num1 < num3;
    };
    ext.pi = function(n1) {
        return n1 * Math.PI;
    };
    ext.gte = function(n1, n2) {
	return n1 >= n2;
    };
    ext.lte = function(n1, n2) {
	return n1 >= n2;
    };
    ext.ne = function(num1, num2) {
	return n1 != n2;
    };
    ext.mathMenu = function(lhr, m, rhl) {
	switch(m) {
	    case '≥':
		return lhr >= rhl;
	    case '≤':
		return lhr <= rhl;
	    case 'not equal to':
		return lhr != rhl;
	}
    };
    ext.radii = function(Radius) {
	return Math.pow(Radius, 2) * Math.PI;
    };
    ext.hypot = function(aLeg, bLeg) {
	var x = Math.pow(aLeg, 2) + Math.pow(bLeg, 2);
	return Math.sqrt(x);
    };
    ext.even = function(dividend, divisor) {
	var x = divisor / dividend;
	return x.indexOf('.') == -1;
    };

    ScratchExtensions.register('MathExt', descriptor, ext);
})({});