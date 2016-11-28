# gzip-base64-loader

Gzip base64 loader module for webpack

> Minify any file using GZIP using [pako](http://nodeca.github.io/pako/) and base64-encode the result using [base64-js](https://github.com/davidchambers/Base64.js).

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

In your `webpack.config.js`, add the gzip-base64-loader:

```javascript
loaders: [
    {
        test: /\.txt$/i,
        loaders: [
            'gzip-base64-webpack'
        ]
    }
]
```

Or use it on a per-file basis:

```var packedDatadata = require('!gzip-base64!bigfile.txt');
```

To extract the data, use:

```var pako = require('pako');
var base64 = require('base64-js');
var packedData = require('!gzip-base64!bigfile.txt');
var data = pako.inflate(base64.toByteArray(packedData), { to: 'string' });  // assuming the original data was a string
```

## Inspiration

* [raw-loader](https://github.com/webpack/raw-loader)
* [image-loader](https://github.com/tcoopman/image-webpack-loader)

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
