// Browser info and language detector Scratch Extension by andrewjcole
// Browser detection script http://jsfiddle.net/9zxvE/383/

(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

alert("Extension loaded.");

var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6



 var userLang = navigator.language || navigator.userLanguage; 

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.loc = function() {
        return  userLang
    };


    ext.country = function() {
        return  thecode
    };

	ext.op = function() {
		return isOpera;
	};

	ext.ff = function() {
		return isFirefox;
	};

	ext.saf = function() {
		return isSafari;
	};

	ext.chrome = function() {
		return isChrome;
	};

	ext.ie = function() {
		return isIE;
	};

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // block infos
      ['r', 'language', 'loc'],
      ['b', 'is Opera?', 'op'],
      ['b', 'is Firefox?', 'ff'],
      ['b', 'is Safari?', 'saf'],
      ['b', 'is Chrome?', 'chrome'],
      ['b', 'is Internet Explorer?', 'ie'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Browser Info and Language', descriptor, ext);
})({});