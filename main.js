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