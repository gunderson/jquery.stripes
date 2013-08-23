# jQuery Stripes

A jQuery plugin that creates stripes on an img element.

Requires `<canvas>` so no IE8. 

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/patrickgunderson/jquery.stripes/master/dist/jquery.stripes.min.js
[max]: https://raw.github.com/patrickgunderson/jquery.stripes/master/dist/jquery.stripes.js

In your web page:


```html
<img id="stripes" style="background:#888"/>
<script>
$('#stripes').stripes({
    lineWidth: 10,
    separation: 10,
    angle: 45, // degrees
    degrees: true, // false for radians
    foregroundColor: "#000", // takes any css color;
    backgroundColor: null //transparent by default
});
</script>
```
http://jsfiddle.net/gunderson/xdaYB/1/


or get stripes as a dataURL image:

```html
<script>
var myStripes = $.stripes({
    lineWidth: 10,
    separation: 10,
    angle: 45, // degrees
    degrees: true, // false for radians
    foregroundColor: "#000", // takes any css color;
    backgroundColor: null //transparent by default
});
$("#stripes").attr("src", myStripes)
</script>
```
http://jsfiddle.net/gunderson/v3c5e/1/

## Play with it


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/gunderson/jquery.stripes/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

