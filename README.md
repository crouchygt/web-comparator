# Web Comparator

**Very much work in progress!**

## Getting Started

Imagemagick is required to do the comparison of the images.

```sh
brew install imagemagick
```

Once installed, install the npm dependencies:

```sh
npm install
```

## Comparing sites

While I work on commandor support and a nice CLI, the quick and dirty way to get a screenshot is to run the following:

```sh
node index.js https://example.com https://example.com/1
```

The output will be stored in the images folder.
