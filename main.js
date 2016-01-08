window.onload = function() {
    for (i = 0; i < extensions.length; i++) {
        var extensionLinksTemp = extensions[i].links.split(",")
        var extensionLinkTitlesTemp = extensions[i].linktitles.split(",")
        var linkarea = "";

        for (ii = 0; ii < extensionLinksTemp.length; ii++) {
            linkarea = linkarea + '<a href=' + extensionLinksTemp[ii] + ' target="_blank">' + extensionLinkTitlesTemp[ii] + '</a>'
        }
        document.getElementById("directory").innerHTML += '<tr id="item ' + i + '"><td style="width: 150px;">' + extensions[i].title + '</td><td style="width: 80px;">' + extensions[i].author + '</td><td style="width: 40px;">' + linkarea + '</td><td style="width: 650px;">' + extensions[i].descriptions + '</td><tr>';
    }
    //sorttable.makeSortable(document.getElementById("directory"));
	
	/*
    document.getElementById("search").onkeyup = function() {
        _this = this;

        $.each($("#directory tbody").find("tr"), function() {
            if (document.getElementById('search').value.length > 0) {
                $("#top").hide();
            } else {
                $("#top").show();
            }
            if ($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) == -1)
                $(this).hide();
            else
                $(this).show();
        });
    };
	*/
};

//for my own use to make updating the list quicker
function addToList(title, author, linktitles, links, description) {
    extensions.push();
    last = extensions.length;
    extensions[last] = new Object();
    extensions[last].title = title;
    extensions.sort(sort_by('title', false, function(a) {
        return a.toUpperCase()
    }));

    n = arrayObjectIndexOf(extensions, title, "title");
    extensions[n].author = author;
    extensions[n].links = links;
    extensions[n].descriptions = description;
    extensions[n].linktitles = linktitles;

    console.log("var extensions = " + JSON.stringify(extensions, null, 4) + ";");
}

var sort_by = function(field, reverse, primer) {
    var key = primer ?
        function(x) {
            return primer(x[field])
        } :
        function(x) {
            return x[field]
        };

    reverse = !reverse ? 1 : -1;

    return function(a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
}

function arrayObjectIndexOf(myArray, searchTerm, property) {
    for (var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) return i;
    }
    return -1;
}