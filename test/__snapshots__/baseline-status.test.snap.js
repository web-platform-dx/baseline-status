/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/* @web/test-runner snapshot v1 */

export const snapshots = {};

snapshots["Baseline-status renders with default values"] =
`<div class="name">
  Unknown feature
</div>
<details>
  <summary aria-label="Baseline: Unknown availability. Supported in Chrome: unknown. Supported in Edge: unknown. Supported in Firefox: unknown. Supported in Safari: unknown.">
    <baseline-icon
      aria-hidden="true"
      support="no_data"
    >
    </baseline-icon>
    <div
      aria-hidden="true"
      class="baseline-status-title"
    >
      <div>
        Unknown availability
      </div>
      <div class="baseline-status-browsers">
        <span>
          <browser-support-icon class="support-no_data">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-no_data">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-no_data">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-no_data">
          </browser-support-icon>
        </span>
      </div>
    </div>
    <span
      aria-hidden="true"
      class="open-icon"
    >
    </span>
  </summary>
  <p>
    We currently don’t have browser support information about this feature.
  </p>
  <p>
  </p>
</details>
`;
/* end snapshot Baseline-status renders with default values */

snapshots["Baseline-status renders baseline-low widget for existing feature"] =
`<h1>
  accent-color
</h1>
<details>
  <summary>
    <baseline-icon support="low">
    </baseline-icon>
    <div class="baseline-status-title">
      <div>
        <strong>
          Baseline:
        </strong>
        2022
        <span class="baseline-badge">
          newly available
        </span>
      </div>
      <div>
        <browser-support-icon class="support-low">
        </browser-support-icon>
        <browser-support-icon class="support-low">
        </browser-support-icon>
        <browser-support-icon class="support-low">
        </browser-support-icon>
        <browser-support-icon class="support-low">
        </browser-support-icon>
      </div>
    </div>
    <span class="open-icon">
    </span>
  </summary>
  <p>
    Since March 2022 this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
  </p>
  <p>
    <a href="https://github.com/web-platform-dx/web-features/blob/main/features/.yml">
      Learn more
    </a>
  </p>
</details>
`;
/* end snapshot Baseline-status renders baseline-low widget for existing feature */

snapshots["Baseline-status renders baseline-low widget for an existing feature"] =
`<div class="name">
  accent-color
</div>
<details>
  <summary aria-label="Baseline:  2022 (newly available). Supported in Chrome: no. Supported in Edge: no. Supported in Firefox: no. Supported in Safari: no.">
    <baseline-icon
      aria-hidden="true"
      support="newly"
    >
    </baseline-icon>
    <div
      aria-hidden="true"
      class="baseline-status-title"
    >
      <div>
        <strong>
          Baseline
        </strong>
        2022
        <span class="baseline-badge">
          newly available
        </span>
      </div>
      <div class="baseline-status-browsers">
        <span>
          <browser-support-icon class="support-newly">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-newly">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-newly">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-newly">
          </browser-support-icon>
        </span>
      </div>
    </div>
    <span
      aria-hidden="true"
      class="open-icon"
    >
    </span>
  </summary>
  <p>
    Since March 2022 this feature works across the latest
        devices and browser versions. This feature might not work in older
        devices or browsers.
  </p>
  <p>
    <a
      href="https://github.com/web-platform-dx/web-features/blob/main/features/.yml"
      target="_top"
    >
      Learn more
    </a>
  </p>
</details>
`;
/* end snapshot Baseline-status renders baseline-low widget for an existing feature */

snapshots["Baseline-status renders baseline-high widget for an existing feature"] =
`<div class="name">
  Arrays (initial support)
</div>
<details>
  <summary aria-label="Baseline: Widely available. Supported in Chrome: no. Supported in Edge: no. Supported in Firefox: no. Supported in Safari: no.">
    <baseline-icon
      aria-hidden="true"
      support="widely"
    >
    </baseline-icon>
    <div
      aria-hidden="true"
      class="baseline-status-title"
    >
      <div>
        <strong>
          Baseline
        </strong>
        Widely available
      </div>
      <div class="baseline-status-browsers">
        <span>
          <browser-support-icon class="support-widely">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-widely">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-widely">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-widely">
          </browser-support-icon>
        </span>
      </div>
    </div>
    <span
      aria-hidden="true"
      class="open-icon"
    >
    </span>
  </summary>
  <p>
    This feature is well established and works across many
        devices and browser versions. It’s been available across browsers
        since July 2015
  </p>
  <p>
    <a
      href="https://github.com/web-platform-dx/web-features/blob/main/features/.yml"
      target="_top"
    >
      Learn more
    </a>
  </p>
</details>
`;
/* end snapshot Baseline-status renders baseline-high widget for an existing feature */

snapshots["Baseline-status renders default widget for an unexisting feature"] =
`<div class="name">
  i-dont-exist
</div>
<details>
  <summary aria-label="Baseline: Unknown availability. Supported in Chrome: unknown. Supported in Edge: unknown. Supported in Firefox: unknown. Supported in Safari: unknown.">
    <baseline-icon
      aria-hidden="true"
      support="no_data"
    >
    </baseline-icon>
    <div
      aria-hidden="true"
      class="baseline-status-title"
    >
      <div>
        Unknown availability
      </div>
      <div class="baseline-status-browsers">
        <span>
          <browser-support-icon class="support-no_data">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-no_data">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-no_data">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-no_data">
          </browser-support-icon>
        </span>
      </div>
    </div>
    <span
      aria-hidden="true"
      class="open-icon"
    >
    </span>
  </summary>
  <p>
    We currently don’t have browser support information about this feature.
  </p>
  <p>
  </p>
</details>
`;
/* end snapshot Baseline-status renders default widget for an unexisting feature */

snapshots["Baseline-status renders loading status while api call is in flight"] =
`<h1>
  i-dont-exist
</h1>
<details>
  <summary>
    <baseline-icon support="no_data">
    </baseline-icon>
    <div class="baseline-status-title">
      <div>
        <strong>
          Baseline:
        </strong>
        Unknown availability
      </div>
      <div>
        <browser-support-icon class="support-no_data">
        </browser-support-icon>
        <browser-support-icon class="support-no_data">
        </browser-support-icon>
        <browser-support-icon class="support-no_data">
        </browser-support-icon>
        <browser-support-icon class="support-no_data">
        </browser-support-icon>
      </div>
    </div>
    <span class="open-icon">
    </span>
  </summary>
  <p>
    We currently don’t have browser support information about this feature.
  </p>
  <p>
    <a href="https://github.com/web-platform-dx/web-features/blob/main/features/i-dont-exist.yml">
      Learn more
    </a>
  </p>
</details>
`;
/* end snapshot Baseline-status renders loading status while api call is in flight */

snapshots["Baseline-status renders baseline widget for a feature from feature-id attribute"] =
`<div class="name">
  Arrays (initial support)
</div>
<details>
  <summary aria-label="Baseline: Widely available. Supported in Chrome: no. Supported in Edge: no. Supported in Firefox: no. Supported in Safari: no.">
    <baseline-icon
      aria-hidden="true"
      support="widely"
    >
    </baseline-icon>
    <div
      aria-hidden="true"
      class="baseline-status-title"
    >
      <div>
        <strong>
          Baseline
        </strong>
        Widely available
      </div>
      <div class="baseline-status-browsers">
        <span>
          <browser-support-icon class="support-widely">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-widely">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-widely">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-widely">
          </browser-support-icon>
        </span>
      </div>
    </div>
    <span
      aria-hidden="true"
      class="open-icon"
    >
    </span>
  </summary>
  <p>
    This feature is well established and works across many
        devices and browser versions. It’s been available across browsers
        since July 2015
  </p>
  <p>
    <a
      href="https://github.com/web-platform-dx/web-features/blob/main/features/.yml"
      target="_top"
    >
      Learn more
    </a>
  </p>
</details>
`;
/* end snapshot Baseline-status renders baseline widget for a feature from feature-id attribute */

snapshots["Baseline-status renders limited availability correctly when mobile support is missing"] = 
`<div class="name">
  paint-order
</div>
<details>
  <summary aria-label="Baseline: Limited availability. Supported in Chrome: yes. Supported in Edge: yes. Supported in Firefox: yes. Supported in Safari: no.">
    <baseline-icon
      aria-hidden="true"
      support="limited"
    >
    </baseline-icon>
    <div
      aria-hidden="true"
      class="baseline-status-title"
    >
      <div>
        Limited availability
      </div>
      <div class="baseline-status-browsers">
        <span>
          <browser-support-icon class="support-available">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-available">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-available">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-unavailable">
          </browser-support-icon>
        </span>
      </div>
    </div>
    <span
      aria-hidden="true"
      class="open-icon"
    >
    </span>
  </summary>
  <p>
    This feature is not Baseline because it does not work in some of the most widely-used browsers.
  </p>
  <p>
    <a
      href="https://github.com/web-platform-dx/web-features/blob/main/features/.yml"
      target="_top"
    >
      Learn more
    </a>
  </p>
</details>
`;
/* end snapshot Baseline-status renders limited availability correctly when mobile support is missing */

snapshots["Baseline-status renders upvote button when developer signals are present"] = 
`<div class="name">
  grid
  <a
    class="signals-badge"
    href="https://example.com/upvote"
    target="_top"
    title="42 developer upvotes. Need this feature across browsers? Click this and upvote it on GitHub."
  >
    👍 42
  </a>
</div>
<details>
  <summary aria-label="Baseline: Widely available. Supported in Chrome: no. Supported in Edge: no. Supported in Firefox: no. Supported in Safari: no.">
    <baseline-icon
      aria-hidden="true"
      support="widely"
    >
    </baseline-icon>
    <div
      aria-hidden="true"
      class="baseline-status-title"
    >
      <div>
        <strong>
          Baseline
        </strong>
        Widely available
      </div>
      <div class="baseline-status-browsers">
        <span>
          <browser-support-icon class="support-widely">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-widely">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-widely">
          </browser-support-icon>
        </span>
        <span>
          <browser-support-icon class="support-widely">
          </browser-support-icon>
        </span>
      </div>
    </div>
    <span
      aria-hidden="true"
      class="open-icon"
    >
    </span>
  </summary>
  <p>
    This feature is well established and works across many
        devices and browser versions. It’s been available across browsers
        since October 2017
  </p>
  <p>
    <a
      href="https://github.com/web-platform-dx/web-features/blob/main/features/.yml"
      target="_top"
    >
      Learn more
    </a>
  </p>
</details>
`;
/* end snapshot Baseline-status renders upvote button when developer signals are present */

