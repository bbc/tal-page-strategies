# TAL -- Page Strategies

This repository is designed to be a submodule for [TAL](https://github.com/bbc/tal) that contains the [Page Strategies](http://bbc.github.io/tal/overview/device-configuration.html#pagestrategy-string) for the different device configurations.

When adding or updating a page strategy or element within a strategy you will have to add it to the appropirate allow regex in index.js.
## Releasing

- Make a change
- Test it
- Run: `grunt bump`

## Testing

- Run: `npm test`
