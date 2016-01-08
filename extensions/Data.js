new(function() {
    var ext = this;

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {
            status: 2,
            msg: 'Ready'
        };
    };

    ext.power = function(base, exponent) {
        return Math.pow(base, exponent);
    };

    ext.uppercase = function(uppercasestring) {
        var str = (uppercasestring);

        return (str.toLocaleUpperCase());
    };

    ext.lowercase = function(lowercasestring) {
        var str2 = (lowercasestring);

        return (str2.toLocaleLowerCase());
    };

    ext.reverse = function(reversed) {
        return (reversed).split("").reverse().join("");
    };

    ext.bool1 = function() {
        return true
    };

    ext.bool2 = function() {
        return false
    };


    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, param1 default value, param2 default value
            ['r', '%n ^ %n', 'power', 2, 3],
            ['r', '%s uppercase', 'uppercase', "scratch"],
            ['r', '%s lowercase', 'lowercase', "CAT"],
            ['r', '%s reversed', 'reverse', "reward"],
            ['b', 'true', 'bool1'],
            ['b', 'false', 'bool2'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Data', descriptor, ext);
})();