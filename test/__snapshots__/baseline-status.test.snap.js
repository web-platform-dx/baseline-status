/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/* @web/test-runner snapshot v1 */

export const snapshots = {};

snapshots["Baseline-status renders with default values"] = 
`<h1>
  Unknown feature
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
`<h1>
  accent-color
</h1>
<details>
  <summary>
    <baseline-icon support="newly">
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
        <browser-support-icon class="support-newly">
        </browser-support-icon>
        <browser-support-icon class="support-newly">
        </browser-support-icon>
        <browser-support-icon class="support-newly">
        </browser-support-icon>
        <browser-support-icon class="support-newly">
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
/* end snapshot Baseline-status renders baseline-low widget for an existing feature */

snapshots["Baseline-status renders baseline-high widget for an existing feature"] =
`<h1>
  Arrays (initial support)
</h1>
<details>
  <summary>
    <baseline-icon support="widely">
    </baseline-icon>
    <div class="baseline-status-title">
      <div>
        <strong>
          Baseline:
        </strong>
        Widely Available
      </div>
      <div>
        <browser-support-icon class="support-widely">
        </browser-support-icon>
        <browser-support-icon class="support-widely">
        </browser-support-icon>
        <browser-support-icon class="support-widely">
        </browser-support-icon>
        <browser-support-icon class="support-widely">
        </browser-support-icon>
      </div>
    </div>
    <span class="open-icon">
    </span>
  </summary>
  <p>
    This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
  </p>
  <p>
    <a href="https://github.com/web-platform-dx/web-features/blob/main/features/.yml">
      Learn more
    </a>
  </p>
</details>
`;
/* end snapshot Baseline-status renders baseline-high widget for an existing feature */

snapshots["Baseline-status renders default widget for an unexisting feature"] = 
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

