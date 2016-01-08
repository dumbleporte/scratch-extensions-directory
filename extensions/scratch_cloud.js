(function(ext) {
  var status = {status: 1, msg: 'Getting icon'};

  var string = '';

  var size = 200;

  var image = new Image();
  image.onload = function() {
    var canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, size, size);
    var data = ctx.getImageData(0, 0, size, size).data;

    function num(n) {
      string += ('00000000' + n).substr(-8,8);
    }

    for (var i = 0; i < data.length; i+= 4) {
      num(data[i] << 16 | data[i + 1] << 8 | data[i + 2]);
    }
    status = {status: 2, msg: 'Ready'};
  };
  image.src = 'http://' + Scratch.INIT_DATA.LOGGED_IN_USER.model.thumbnail_url.substr(6);

  ext._shutdown = function() {};

  ext._getStatus = function() {
    return status;
  };

  ext.icon = function() {
    return string;
  };

  var descriptor = {
    blocks: [
      ['r', 'get icon', 'icon'],
    ]
  };

  ScratchExtensions.register('Scratch Cloud', descriptor, ext);
})({});