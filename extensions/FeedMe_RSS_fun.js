if (ScratchExtensions) {
    $.getScript("https://www.google.com/jsapi", function() {
        google.load("feeds", "1", {callback:'launchGoogleFeedAPIExtension'});
    });
}

function launchGoogleFeedAPIExtension() {
    var descriptor, ext = {}, latestFeed = 0, latestFeedType = 0;
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: "Ready"};
    };
    
    ext.createFeed = function(feedUrl, numEntries, callback) {
        var feed = new google.feeds.Feed(String(feedUrl)), waitLoop;
        feed.setNumEntries(numEntries);
        feed.load(function(result) {
            if (result.error) {
                console.log("There was an error loading a feed. (" + result.error.code + ") " + result.error.message);
                callback();
            } else {
                latestFeed = result.feed;
                latestFeedType = {standard : ""};
                callback();
            }
        });
    };
    
    ext.createFeedFromQuery = function(query, callback) {
        google.feeds.findFeeds(query, function(result) {
            latestFeed = result;
            latestFeedType = {search : query};
            callback();
        });
    }
    
    ext.feedEntriesLength = function() {
        if (latestFeed) {
            return latestFeed.entries.length;
        }
        return 0;
    };
    
    ext.feedAttributes = function(attribute) {
        if (latestFeed && !(latestFeedType.search)) {
            return latestFeed[String(attribute)];
        }
        return 0;
    };
    
    ext.feedEntryAttributes = function(attribute, index) {
        var temp;
        if (latestFeed && !latestFeedType.search) {
            if (attribute === "local title") {
                temp = latestFeed.entries[index - 1].title.split(":: ");
                return temp[temp.length - 1];
            }
            return latestFeed.entries[index - 1][String(attribute)];
        } else {
            return latestFeed.entries[index - 1][String(attribute)].replace(/(<b>|<\/b>)/gim, "");
        }
        return 0;
    };
    
    ext.uniqueUrl = function(cachedUrl) {
        var currentDate = new Date(), finalDate = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), currentDate.getUTCHours(), currentDate.getUTCMinutes(), currentDate.getUTCSeconds(), currentDate.getUTCMilliseconds());
        if (cachedUrl[cachedUrl.length - 1] === "/") {
            cachedUrl = cachedUrl.slice(0, -1);
        }
        return (cachedUrl + "?" + String(finalDate.getTime()));
    };
    
    ext.usingThis = function() {
        return true;
    };

    descriptor = {
        blocks: [
            ["b", "using FeedMe?", "usingThis"],
            ["r", "don't cache url %s", "uniqueUrl", "http://scratch.mit.edu/discuss/feeds/forum/5/"],
            ["w", "new feed from %s with %n entries", "createFeed", "http://scratch.mit.edu/discuss/feeds/forum/5/", 4],
            ["w", "new feed from query %s", "createFeedFromQuery", "site:scratch.mit.edu project"],
            ["r", "%m.feedAttributes of feed", "feedAttributes", "title"],
            ["r", "length of feed entries", "feedEntriesLength"],
            ["r", "%m.entryAttributes of feed entry %n", "feedEntryAttributes", "title", 1]
        ],
        menus: {
            entryAttributes: ["content", "contentSnippet", "title", "local title", "author", "publishedDate", "link"],
            feedAttributes: ["feedUrl", "title", "link", "description", "author"]
        },
        url: "https://github.com/powerpoint56/feedme-scratch/"
    };
    
    ScratchExtensions.register("FeedMe - RSS fun", descriptor, ext);
}