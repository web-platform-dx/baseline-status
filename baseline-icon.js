/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {LitElement, html, css} from 'lit';

/**
 * Web component rendering baseline support icon.
 * @see https://web.dev/baseline
 */
export default class BaselineIcon extends LitElement {
  static get styles() {
    return css`
      :host {
        --baseline-icon-limited: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='20' viewBox='0 0 36 20' fill='none'%3E%3Cpath d='M10 0L16 6L14 8L8 2L10 0Z' fill='%23F09409'/%3E%3Cpath d='M28 2L36 10L28 18L26 16L32 10L26 4L28 2Z' fill='%23C6C6C6'/%3E%3Cpath d='M22 12L20 14L26 20L28 18L22 12Z' fill='%23F09409'/%3E%3Cpath d='M8 2L10 4L4 10L10 16L8 18L0 10L8 2Z' fill='%23C6C6C6'/%3E%3Cpath d='M26 0L28 2L10 20L8 18L26 0Z' fill='%23F09409'/%3E%3C/svg%3E");
        --baseline-icon-high: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='20' viewBox='0 0 36 20' fill='none'%3E%3Cpath d='M18 8L20 10L18 12L16 10L18 8Z' fill='%231EA446'/%3E%3Cpath d='M28 2L26 4L32 10L26 16L22 12L20 14L26 20L36 10L28 2Z' fill='%23C4EED0'/%3E%3Cpath d='M10 0L2 8L4 10L10 4L14 8L16 6L10 0Z' fill='%23C4EED0'/%3E%3Cpath d='M26 0L28 2L10 20L0 10L2 8L10 16L26 0Z' fill='%231EA446'/%3E%3C/svg%3E");
        --baseline-icon-low: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='20' viewBox='0 0 36 20' fill='none'%3E%3Cpath d='M10 0L12 2L10 4L8 2L10 0Z' fill='%23A8C7FA'/%3E%3Cpath d='M14 4L16 6L14 8L12 6L14 4Z' fill='%23A8C7FA'/%3E%3Cpath d='M30 4L32 6L30 8L28 6L30 4Z' fill='%23A8C7FA'/%3E%3Cpath d='M34 8L36 10L34 12L32 10L34 8Z' fill='%23A8C7FA'/%3E%3Cpath d='M30 12L32 14L30 16L28 14L30 12Z' fill='%23A8C7FA'/%3E%3Cpath d='M26 16L28 18L26 20L24 18L26 16Z' fill='%23A8C7FA'/%3E%3Cpath d='M22 12L24 14L22 16L20 14L22 12Z' fill='%23A8C7FA'/%3E%3Cpath d='M6 4L8 6L6 8L4 6L6 4Z' fill='%23A8C7FA'/%3E%3Cpath d='M26 0L28 2L10 20L0 10L2 8L10 16L26 0Z' fill='%231B6EF3'/%3E%3C/svg%3E");
        --baseline-icon-no_data : url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='20' viewBox='0 0 36 20' fill='none'%3E%3Cpath d='M18 8L20 10L18 12L16 10L18 8Z' fill='%23C6C6C6'/%3E%3Cpath d='M28 2L26 4L32 10L26 16L22 12L20 14L26 20L36 10L28 2Z' fill='%23C6C6C6'/%3E%3Cpath d='M10 0L2 8L4 10L10 4L14 8L16 6L10 0Z' fill='%23C6C6C6'/%3E%3Cpath d='M26 0L28 2L10 20L0 10L2 8L10 16L26 0Z' fill='%23C6C6C6'/%3E%3C/svg%3E");
      }

      @media (prefers-color-scheme: dark) {
        :host {
          --baseline-icon-limited: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='20' viewBox='0 0 36 20' fill='none'%3E%3Cpath d='M10 0L16 6L14 8L8 2L10 0Z' fill='%23F09409'/%3E%3Cpath d='M28 2L36 10L28 18L26 16L32 10L26 4L28 2Z' fill='%23434649'/%3E%3Cpath d='M22 12L20 14L26 20L28 18L22 12Z' fill='%23F09409'/%3E%3Cpath d='M8 2L10 4L4 10L10 16L8 18L0 10L8 2Z' fill='%23434649'/%3E%3Cpath d='M26 0L28 2L10 20L8 18L26 0Z' fill='%23F09409'/%3E%3C/svg%3E%0A");
          --baseline-icon-high: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='20' viewBox='0 0 36 20' fill='none'%3E%3Cpath d='M18 8L20 10L18 12L16 10L18 8Z' fill='%231EA446'/%3E%3Cpath d='M28 2L26 4L32 10L26 16L22 12L20 14L26 20L36 10L28 2Z' fill='%230E411D'/%3E%3Cpath d='M10 0L2 8L4 10L10 4L14 8L16 6L10 0Z' fill='%230E411D'/%3E%3Cpath d='M26 0L28 2L10 20L0 10L2 8L10 16L26 0Z' fill='%231EA446'/%3E%3C/svg%3E");
          --baseline-icon-low: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='20' viewBox='0 0 36 20' fill='none'%3E%3Cpath d='M10 0L12 2L10 4L8 2L10 0Z' fill='%230842A0'/%3E%3Cpath d='M14 4L16 6L14 8L12 6L14 4Z' fill='%230842A0'/%3E%3Cpath d='M30 4L32 6L30 8L28 6L30 4Z' fill='%230842A0'/%3E%3Cpath d='M34 8L36 10L34 12L32 10L34 8Z' fill='%230842A0'/%3E%3Cpath d='M30 12L32 14L30 16L28 14L30 12Z' fill='%230842A0'/%3E%3Cpath d='M26 16L28 18L26 20L24 18L26 16Z' fill='%230842A0'/%3E%3Cpath d='M22 12L24 14L22 16L20 14L22 12Z' fill='%230842A0'/%3E%3Cpath d='M6 4L8 6L6 8L4 6L6 4Z' fill='%230842A0'/%3E%3Cpath d='M26 0L28 2L10 20L0 10L2 8L10 16L26 0Z' fill='%231B6EF3'/%3E%3C/svg%3E");
        }
      }

      div {
        background-repeat: no-repeat;
        width: 36px;
        height: 20px;
        display: inline-block;
      }

      .support-limited {
        background-image: var(--baseline-icon-limited);
      }

      .support-high {
        background-image: var(--baseline-icon-high);
      }

      .support-low {
        background-image: var(--baseline-icon-low);
      }

      .support-no_data {
        background-image: var(--baseline-icon-no_data);
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Level of support (high, low, limited, no_data)
       * @type {string}
       */
      support: {type: String},
    };
  }

  render() {
    return html`
      <div
        aria-label="Baseline icon support ${this.support}"
        class="support-${this.support}"></div>
    `
  }
}

window.customElements.define('baseline-icon', BaselineIcon);
