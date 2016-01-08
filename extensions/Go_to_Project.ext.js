(function (ext) {
        ext._shutdown = function () {};
        ext._getStatus = function () {
            if (!window.localStorage) return {
                status: 1,
                msg: 'Missing browser features - make sure to have the latest version of Chrome, Firefox, or Opera'
            };
            return {
                status: 2,
                msg: 'Ready to No$c0pe'
            };
        };
        var request_dialog = function(id) {
            if((""+id).match(/^[0-9]+$/) == null) return false; // hax prevention
            return window.confirm("This project wants to take you to project " + id + ". Click 'OK' to go there, or 'Cancel' to cancel.");
        };
        ext.go_to_project = function (id) {
            if(!request_dialog(id)) return;
            localStorage['ipc_params'] = "";
            location.href = "/projects/" + id;
        };
        ext.go_to_project_with_parameters = function (id, params) {
            if(!request_dialog(id)) return;
            localStorage['ipc_params'] = params;
            location.href = "/projects/" + id;
        };
        ext.get_params = function () {
            var p = localStorage['ipc_params'];
            if (typeof p == "undefined") return "";
            else return p;
        };
        ext.is_enabled = function() { return true; }
        
        var descriptor = {
            blocks: [
                [' ', 'Go to project %n', 'go_to_project', ''],
                [' ', 'Go to project %n and send data %s', 'go_to_project_with_parameters', '', ''],
                ['r', 'Data received', 'get_params'],
                ['b', 'Running Go To Project?', 'is_enabled']
            ],
            url: "http://scratch.mit.edu/discuss/youtube/dQw4w9WgXcQ/" // yes
        };
        ScratchExtensions.register('Go To Project', descriptor, ext);
    })({});
