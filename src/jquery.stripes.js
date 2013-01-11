/*
 * jquery.stripes
 * https://github.com/patrickgunderson/jquery.stripes
 *
 * Copyright (c) 2013 Patrick Gunderson
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.stripes = function(options) {
    var TWO_PI = Math.PI * 2;
    var HALF_PI = Math.PI * 0.5;
    var defaults = {
      lineWidth: 10,
      separation: 5,
      angle: 0.15 * Math.PI, // radians
      foregroundColor: "#000",
      backgroundColor: null
    };

    $.extend(this, defaults);
    $.extend(this, options);

    this.angle %= TWO_PI;
    if (this.angle < 0){
      this.angle += Math.PI;
    } else if(this.angle > Math.PI) {
      this.angle -= Math.PI;
    }


    var path0 = getPath(this.angle, this.lineWidth, this.separation);
    var path1;
    if (path0[3].x > 0 && path0[3].y > 0){
      this.width = path0[3].x;
      this.height = path0[3].y;
      path1 = translatePath(path0, (-this.width / 2), Math.floor(this.height / 2));
    } else if(path0[3].x < 0 && path0[3].y > 0){
      this.width = -path0[3].x;
      this.height = path0[3].y;
      path0 = translatePath(path0, this.width, 0);
      path1 = translatePath(path0, (-this.width / 2), Math.floor(-this.height / 2));
    }
    //need to handle horiz dy = 0 and very dx = 0


    //create canvas to draw into
    var $canvas = $('<canvas>');
    $canvas[0].width = this.width;
    $canvas[0].height = this.height;

    var ctx = $canvas[0].getContext('2d');

    //fill the bg
    if (this.backgroundColor){
      ctx.fillStyle = this.backgroundColor;
      ctx.fillRect(0,0,this.width, this.height);
    }

    draw(path0, this.foregroundColor);
    draw(path1, this.foregroundColor);

    function draw(corners, color){
      //draw first stripe
      console.log(color);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(corners[0].x,corners[0].y);
      ctx.lineTo(corners[1].x,corners[1].y);
      ctx.lineTo(corners[2].x,corners[2].y);
      ctx.lineTo(corners[3].x,corners[3].y);
      ctx.closePath();
      ctx.fill();
    }

    function getPath(angle, lineWidth, separation){
      var sx = Math.cos(angle);
      var sy = Math.sin(angle);

      var oppositeAngle = HALF_PI - angle;

      var perpendicularSX = Math.cos(-oppositeAngle);
      var perpendicularSY = Math.sin(-oppositeAngle);

      var separationDX = perpendicularSX * separation;
      var separationDY = perpendicularSY * separation;

      var lineWidthDX = perpendicularSX * lineWidth;
      var lineWidthDY = perpendicularSY * lineWidth;

      //law of sines!!
      var width = Math.sin(HALF_PI) * (lineWidth + separation) / sy;
      var height = sy * (width) / Math.sin(oppositeAngle);
      //var diagonalLength = Math.sin(HALF_PI) * (width) / Math.sin(oppositeAngle);
      var diagonalLength = Math.sqrt((width*width)+(height*height));


      var nw = {x: 0, y: 0};
      var sw = {x: Math.ceil(sx * diagonalLength), y: Math.ceil(sy * diagonalLength)};
      var se = {x: (sw.x + lineWidthDX  ), y: (sw.y + lineWidthDY)};
      var ne = {x: lineWidthDX, y: lineWidthDY};

      return [nw, ne, se, sw];
    }

    function translatePath(path, x, y){
      var newPath = [];
      $.each(path, function(i, points){
        newPath[i] = {
          x: points.x + x,
          y: points.y + y
        };
      });
      return newPath;
    }

    if (this.is('img')){
      this.attr('src', $canvas[0].toDataURL());
    }


    return this;
  };

}(jQuery));
