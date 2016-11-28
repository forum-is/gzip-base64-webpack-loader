# gzip-base64-loader

Gzip base64 loader module for webpack

> Minify any file using GZIP using [pako](http://nodeca.github.io/pako/) + base64-encode the result using [base64-js](https://github.com/davidchambers/Base64.js).

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

In your `webpack.config.js`, add the gzip-base64-loader, chained with the [file-loader](https://github.com/webpack/file-loader):

```javascript
loaders: [
    {
        test: /\.json$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'gzip-base64-webpack?limit=10000'
        ]
    }
]
```

## Inspiration

* [image-loader](https://github.com/tcoopman/image-webpack-loader)

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
