# jQuery Stripes

A jQuery plugin that creates stripes on an img element.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/patrickgunderson/jquery.stripes/master/dist/jquery.stripes.min.js
[max]: https://raw.github.com/patrickgunderson/jquery.stripes/master/dist/jquery.stripes.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.stripes.min.js"></script>
<script>
jQuery(function($) {
  $.awesome(); // "awesome"
});
</script>
```

## Documentation

Requires `<canvas>` so no IE8. 

      <img id="stripes" style="background:#888"/>
      <script>
        $('#stripes').stripes({
            lineWidth: 10,
            separation: 55,
            angle: -.25 * Math.PI, // radians
            backgroundColor: null,
            foregroundColor: "#000"
        });
      </script>

## Examples
    <img id="stripes" style="background:#888"/>
    <script>
        $('#stripes').stripes({
            lineWidth: 10,
            separation: 55,
            angle: -.25 * Math.PI, // radians
            backgroundColor: null,
            foregroundColor: "#000"
        });
    </script>

## Release History
_(Nothing yet)_
