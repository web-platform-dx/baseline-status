# &lt;baseline-status> web component

A widget displaying Baseline status of a web feature based on
https://github.com/web-platform-dx/web-features data

<img width="859" alt="baseline_widget_example" src="https://github.com/web-platform-dx/baseline-status/assets/1914261/3171ee2d-6949-47c9-8328-b79e467813f7">

## Example

Show Baseline status widget for
[anchor-positioning](https://github.com/web-platform-dx/web-features/blob/main/features/anchor-positioning.yml):

```
<baseline-status featureId="anchor-positioning"></baseline-status>
```
## Data source

The widget fetches data from the Web Features API endpoint: `https://api.webstatus.dev/v1/features/` which exposes data from the [web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/) project.

Feature IDs come from the [github.com/web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/tree/main/features) repo. 

Alternatively, you can find the feature ID by browsing the [webstatus.dev](https://webstatus.dev/) site and reading the ID from the URL. E.g. for `Intl.ListFormat` feature the page URL is `https://webstatus.dev/features/intl-list-format`, so the ID for this feature is `intl-list-format`.

## Usage

*Option 1. Install and bundle with your application*

Install

```
npm install baseline-status
```

See [docs](https://github.com/web-platform-dx/baseline-status/blob/main/docs/index.html)
for example usage in HTML.

See [rollup.config.js](https://github.com/web-platform-dx/baseline-status/blob/main/rollup.config.js)
for an example of a bundler configuration.

*Option 2: Precompiled from e.g. CDN.*

This method is less optimal from performance perspective, as it can introduce
multiple versions of Lit into your application since npm can't deduplicate
the packages
[Learn more](https://lit.dev/docs/tools/publishing/#don%27t-bundle-minify-or-optimize-modules).

It can be used for quick testing and prototyping.

```
<script src="https://cdn.jsdelivr.net/npm/baseline-status@1/baseline-status.min.js" type="module"></script>
<baseline-status featureId="anchor-positioning"></baseline-status>
```

## Development

To run locally:

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start dev server: `npm run serve`.
4. Open demo page at http://localhost:8000/docs.

The local server uses wds [@web/dev-server](https://modern-web.dev/docs/dev-server/overview/) package.
To enable web component related polyfills for legacy browsers, it uses `@web/dev-server-legacy` package.
See `web-dev-server.config` file for the exact configuration.

## Copyright and license

Code is released under the [Apache License, Version 2.0](LICENSE) with the following notice:

> Copyright [baseline-status contributors](https://github.com/web-platform-dx/baseline-status/graphs/contributors)
>
> Licensed under the Apache License, Version 2.0 (the "License");
> you may not use this file except in compliance with the License.
> You may obtain a copy of the License at
>
>   http://www.apache.org/licenses/LICENSE-2.0
>
> Unless required by applicable law or agreed to in writing, software
> distributed under the License is distributed on an "AS IS" BASIS,
> WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
> See the License for the specific language governing permissions and
> limitations under the License.
