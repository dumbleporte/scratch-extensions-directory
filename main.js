window.onload = function() {
	var tbody = document.getElementById('table-location');
	var row;
	var obj;
	var linkz = '';
	var linkz2 = '';
	for (i = 0; i < extensions.length; i++) {
		obj = extensions[i];
		row = document.createElement('tr');
		linkz = '';
		if (obj.links.ScratchX != undefined) {
			linkz += '<a href="' + obj.links.ScratchX + '">ScratchX</a><br/>';
		}
		if (obj.links.Doc != undefined) {
			linkz += '<a href="' + obj.links.Doc + '">Doc</a><br/>';
		}
		if (obj.links.Demo != undefined) {
			linkz += '<a href="' + obj.links.Demo + '">Demo</a><br/>';
		}
		linkz2 = linkz.substring(0, linkz.length - 5);
		row.innerHTML = "<td>" + obj.title + "</td><td>" + obj.author + "</td><td>" + linkz2 + "</td><td>" + obj.description + "</td>";
		tbody.appendChild(row);
	}
	
	
	//search
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