# &lt;baseline-status> web component

A widget displaying Baseline status of a web feature based on
https://github.com/web-platform-dx/web-features data

<img width="859" alt="baseline_widget_example" src="https://github.com/GoogleChrome/baseline-status/assets/1914261/3171ee2d-6949-47c9-8328-b79e467813f7">

## Example

Show Baseline status widget for
[anchor-positioning](https://github.com/web-platform-dx/web-features/blob/main/features/anchor-positioning.yml):

```
<baseline-status featureId="anchor-positioning"></baseline-status>
```

## Usage

*Option 1. Install and bundle with your application*

Install

```
npm install baseline-status
```

See [docs](https://github.com/GoogleChrome/baseline-status/blob/main/docs/index.html)
for example usage in HTML.

See [rollup.config.js](https://github.com/GoogleChrome/baseline-status/blob/main/rollup.config.js)
for an example of a bundler configuration.

*Option 2: Precompiled from e.g. CDN.*

This method is less optimal from performance perspective, as it can introduce
multiple versions of Lit into your application since npm can't deduplicate
the packages
[Learn more](https://lit.dev/docs/tools/publishing/#don%27t-bundle-minify-or-optimize-modules).

It can be used for quick testing and prototyping.

```
<script src="https://cdn.jsdelivr.net/npm/baseline-status@1.0.4/baseline-status.min.js" type="module"></script>
<baseline-status featureId="anchor-positioning"></baseline-status>
```

## Development

Run locally:

```
npm run serve
```

The local server uses wds [@web/dev-server](https://modern-web.dev/docs/dev-server/overview/) package.
To enable web component related polyfills for legacy browsers, it uses `@web/dev-server-legacy` package.
See `web-dev-server.config` file for the exact configuration.
