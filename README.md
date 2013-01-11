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
    angle: 0.25 * Math.PI, // radians
    backgroundColor: null,
    foregroundColor: "#000"
});
</script>
```
