import { LitElement, html, css } from 'lit';
import { Task } from '@lit/task';
// eslint-disable-next-line no-unused-vars
import BaselineIcon from './baseline-icon.js';

const ICONS = {
  chrome: `/icons/chrome.svg`,
  edge: `/icons/edge.svg`,
  firefox: `/icons/firefox.svg`,
  safari: `/icons/safari.svg`,
};

const API_ENDPOINT = 'https://api.webstatus.dev/v1/features/';

const BASELINE_DEFS = {
  limited: {
    title: 'Limited availability',
    defaultDescription: 'This feature is not Baseline because it does not work in some of the most widely-used browsers.',
  },
  newly: {
    title: '',
    defaultDescription: 'This feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.'
  },
  'widely': {
    title: 'Widely available',
    defaultDescription: 'This feature is well established and works across many devices and browser versions.'
  },
  loading: {
    title: 'Loading',
    defaultDescription: ''
  },
  no_data: {
    title: 'Unknown availability',
    defaultDescription: 'We currently don’t have browser support information about this feature.'
  },
};

const SUPPORT_ICONS = {
  available: html`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" fill="none"><path fill="currentColor" d="M1.253 3.31a8.843 8.843 0 0 1 5.47-1.882c4.882 0 8.838 3.927 8.838 8.772 0 4.845-3.956 8.772-8.837 8.772a8.842 8.842 0 0 1-5.47-1.882c-.237.335-.49.657-.758.966a10.074 10.074 0 0 0 6.228 2.14c5.562 0 10.07-4.475 10.07-9.996 0-5.52-4.508-9.996-10.07-9.996-2.352 0-4.514.8-6.228 2.14.268.309.521.631.757.966Z"/><path fill="currentColor" d="M11.348 8.125 6.34 13.056l-3.006-2.954 1.002-.985 1.999 1.965 4.012-3.942 1.002.985Z"/></svg>`,
  unavailable: html`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" fill="none"><path fill="currentColor" d="M1.254 3.31a8.843 8.843 0 0 1 5.47-1.882c4.881 0 8.838 3.927 8.838 8.772 0 4.845-3.957 8.772-8.838 8.772a8.842 8.842 0 0 1-5.47-1.882c-.236.335-.49.657-.757.966a10.074 10.074 0 0 0 6.227 2.14c5.562 0 10.071-4.475 10.071-9.996 0-5.52-4.509-9.996-10.07-9.996-2.352 0-4.515.8-6.228 2.14.268.309.52.631.757.966Z"/><path fill="currentColor" d="m10.321 8.126-1.987 1.972 1.987 1.972-.993.986-1.987-1.972-1.987 1.972-.993-.986 1.986-1.972-1.986-1.972.993-.986 1.987 1.972L9.328 7.14l.993.986Z"/></svg>`,
  no_data: html`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none"><path d="M7.18169 12.2783H5.98706C5.99134 11.8703 6.02774 11.5367 6.09625 11.2775C6.16904 11.014 6.28679 10.7738 6.4495 10.5571C6.61221 10.3404 6.82844 10.0939 7.0982 9.8176C7.29516 9.61785 7.475 9.43085 7.63771 9.2566C7.8047 9.0781 7.93958 8.88685 8.04235 8.68285C8.14511 8.4746 8.19649 8.22598 8.19649 7.93698C8.19649 7.64373 8.14297 7.39085 8.03592 7.17835C7.93316 6.96585 7.77901 6.80223 7.57348 6.68748C7.37224 6.57273 7.12175 6.51535 6.82202 6.51535C6.57367 6.51535 6.33817 6.55998 6.11552 6.64923C5.89286 6.73848 5.71302 6.8766 5.576 7.0636C5.43898 7.24635 5.36833 7.48648 5.36405 7.78398H4.17584C4.18441 7.30373 4.3043 6.89148 4.53552 6.54723C4.77102 6.20298 5.08787 5.93948 5.48609 5.75673C5.8843 5.57398 6.32961 5.4826 6.82202 5.4826C7.36581 5.4826 7.82825 5.58035 8.20934 5.77585C8.5947 5.97135 8.88801 6.25185 9.08926 6.61735C9.2905 6.9786 9.39113 7.40785 9.39113 7.9051C9.39113 8.2876 9.31191 8.64035 9.15348 8.96335C8.99934 9.2821 8.80023 9.58173 8.55617 9.86222C8.3121 10.1427 8.05305 10.4105 7.77901 10.6655C7.54351 10.8822 7.38508 11.1266 7.30373 11.3986C7.22237 11.6706 7.18169 11.9639 7.18169 12.2783ZM5.93568 14.2992C5.93568 14.108 5.99562 13.9465 6.11552 13.8147C6.23541 13.683 6.40882 13.6171 6.63576 13.6171C6.86698 13.6171 7.04253 13.683 7.16243 13.8147C7.28232 13.9465 7.34226 14.108 7.34226 14.2992C7.34226 14.482 7.28232 14.6392 7.16243 14.771C7.04253 14.9027 6.86698 14.9686 6.63576 14.9686C6.40882 14.9686 6.23541 14.9027 6.11552 14.771C5.99562 14.6392 5.93568 14.482 5.93568 14.2992Z" fill="currentColor"/><path d="M1.25317 3.31021C2.75786 2.13162 4.65827 1.4281 6.72373 1.4281C11.6047 1.4281 15.5615 5.35546 15.5615 10.2001C15.5615 15.0447 11.6047 18.9721 6.72373 18.9721C4.65827 18.9721 2.75786 18.2686 1.25317 17.09C1.01715 17.425 0.764387 17.7475 0.496094 18.0563C2.20987 19.3966 4.37247 20.1961 6.72373 20.1961C12.2857 20.1961 16.7946 15.7207 16.7946 10.2001C16.7946 4.67946 12.2857 0.204102 6.72373 0.204102C4.37247 0.204102 2.20987 1.00363 0.496094 2.34391C0.764386 2.65272 1.01715 2.97522 1.25317 3.31021Z" fill="currentColor"/></svg>`,
}

/**
 * A web component that renders Baseline support information based on the
 * Web Features project.
 * @see https://github.com/web-platform-dx/web-features/
 *
 * Example usage:
 *
 * <baseline-status featureId="anchor-positioning"></baseline-status>
 */
export class BaselineStatus extends LitElement {
  static get styles() {
    return css`
      :host {
        --baseline-status-color-limited: light-dark(#ea8600, #f09418);
        --baseline-status-color-newly: light-dark(#1a73e8, #4185ff);
        --baseline-status-color-widely: light-dark(#1e8e3e, #24a446);
        --baseline-status-color-no_data: light-dark(#707070, #868686);
        --baseline-status-color-outline: light-dark(#d9d9d9, #d9d9d9);
        --baseline-status-color-link: light-dark(#1a73e8, #5aa1ff);

        color: inherit;
        display: block;
        border: solid 1px var(--baseline-status-color-outline);
        border-radius: 8px;
        padding: 16px 24px 0 24px;
        max-width: 800px;
        font-family: Roboto, sans-serif;
        font-size: 14px;
        font-style: normal;
      }

      .name {
        font-weight: normal;
        font-size: 20px;
        margin: 0;
      }

      a,
      a:active,
      a:visited {
        color: var(--baseline-status-color-link);
      }

      ::slotted(*) {
        color: grey;
        font-style: italic;
        font-size: 80%;
      }

      .baseline-status-title {
        gap: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex: 1;
      }

      .baseline-status-title {
        flex: 1;
      }

      .baseline-status-title div:first-child {
        display: flex;
        align-items: center;
        gap: 0.2rem;
      }

      .baseline-badge {
        background: #3367D6;
        color: #fff;
        font-size: 11px;
        padding: 0 4px;
        border-radius: 2px;
        text-transform: uppercase;
        line-height: 20px;
        margin-inline: 0.5rem;
        white-space: nowrap;
      }

      .baseline-status-browsers {
        font-size: 0;
        max-width: 200px;
        display: flex;
        gap: 16px;
      }

      .baseline-status-browsers span {
        white-space: nowrap;
      }

      .support-no_data {
        color: var(--baseline-status-color-no_data);
      }

      .support-unavailable {
        color: var(--baseline-status-color-limited);
      }

      .support-newly {
        color: var(--baseline-status-color-newly);
      }

      .support-widely,
      .support-available {
        color: var(--baseline-status-color-widely);
      }

      details > summary .open-icon {
        width: 10px;
        height: 20px;
        margin-left: auto;
        color: inherit;
      }

      @media (min-width: 420px) {
        details > summary .open-icon {
          margin-left: 48px;
        }
      }

      details > summary .open-icon svg {
        transition: transform 0.3s;
      }

      details[open] summary .open-icon svg {
        transform: rotate(180deg);
      }

      summary {
        display: flex;
        cursor: pointer;
        font-size: 16px;
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        justify-content: space-between;
        padding: 16px 0;
      }

      summary::-webkit-details-marker {
        display: none;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * ID of the feature from https://github.com/web-platform-dx/web-features/
       * e.g. anchor-positioning
       * @type {string}
       */
      featureId: { type: String },
      feature_id: { type: String, attribute: 'feature-id' },
    };
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      // Reflect feature-id attribute (feature_id prop) to featureId prop.
      if (propName === 'feature_id') {
        this['featureId'] = this.feature_id
      }
    });
  }

  fetchData = new Task(this, {
    task: async ([featureId], { signal }) => {
      const url = API_ENDPOINT + featureId;
      const response = await fetch(url, { signal, cache: 'force-cache' });
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    },
    args: () => [this.featureId],
  });

  renderSupportIcon(baseline, browserImplementation) {
    const support = (baseline === 'limited')
      ? (browserImplementation?.status || 'unavailable')
      : baseline;
    const icon = (support === 'newly' || support === 'widely')
      ? 'available'
      : support;
    return html`<browser-support-icon class="support-${support}">
      ${SUPPORT_ICONS[icon]}
    </browser-support-icon>`;
  }

  /**
   * Returns feature's low_date as mm-yyyy string or empty string if low_date
   * is not present.
   * @param {object} feature
   * @returns {string}
   */
  getBaselineDate(feature) {
    return feature.baseline.low_date ?
      new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long'
      }).format(new Date(feature.baseline.low_date)) :
      '';
  }

  /**
   * Returns Baseline's description.
   * @param {string} baseline
   * @param {string} date
   * @returns {string}
   */
  getDescriptionDate(baseline, date) {
    if (baseline === 'newly' && date) {
      return `Since ${date} this feature works across the latest
        devices and browser versions. This feature might not work in older
        devices or browsers.`
    } else if (baseline === 'widely' && date) {
      return `This feature is well established and works across many
        devices and browser versions. It’s been available across browsers
        since ${date}`
    }
    return BASELINE_DEFS[baseline].defaultDescription;
  }

  renderTemplate(feature, isLoading) {
    const baseline = feature.baseline.status || 'no_data';

    const preTitle = (baseline === 'limited' || baseline === 'no_data') ?
      '' :
      html`<strong>Baseline</strong> `;
    const title = isLoading ? 'Loading...' : BASELINE_DEFS[baseline].title;
    const badge = baseline === 'newly' ?
      html`<span class="baseline-badge">newly available</span>` :
      '';
    const baselineDate = this.getBaselineDate(feature);
    const description = this.getDescriptionDate(baseline, baselineDate);
    const year = (baseline === 'newly' && baselineDate) ?
      baselineDate.split(' ')[1] :
      '';

    const { chrome, edge, firefox, safari } =
      feature.browser_implementations || {};

    const getAriaLabel = (
      title,
      year,
      badge,
      chrome = 'no',
      edge = 'no',
      firefox = 'no',
      safari = 'no',
    ) => {
      if (title === 'Unknown availability') {
        chrome = edge = firefox = safari = 'unknown';
      }
      return `Baseline: ${title}${year ? ` ${year}` : ''}${badge ? ` (newly available)` : ''}. Supported in Chrome: ${chrome === 'available' ? 'yes' : chrome}. Supported in Edge: ${edge === 'available' ? 'yes' : edge}. Supported in Firefox: ${firefox === 'available' ? 'yes' : firefox}. Supported in Safari: ${safari === 'available' ? 'yes' : safari}.`;
    };

    return html` <div class="name">${feature.name}</div>
      <details>
        <summary
          aria-label="${getAriaLabel(
            title,
            year,
            badge,
            chrome?.status,
            edge?.status,
            firefox?.status,
            safari?.status,
          )}"
        >
          <baseline-icon support="${baseline}" aria-hidden="true"></baseline-icon>
          <div class="baseline-status-title" aria-hidden="true">
            <div>${preTitle} ${title} ${year} ${badge}</div>
            <div class="baseline-status-browsers">
              <span><img src="${ICONS['chrome']}" width="20" height="20" alt="" /> ${this.renderSupportIcon(baseline, chrome)}</span>
              <span><img src="${ICONS['edge']}" width="20" height="20" alt="" /> ${this.renderSupportIcon(baseline, edge)}</span>
              <span><img src="${ICONS['firefox']}" width="20" height="20" alt="" /> ${this.renderSupportIcon(baseline, firefox)}</span>
              <span><img src="${ICONS['safari']}" width="20" height="20" alt="" /> ${this.renderSupportIcon(baseline, safari)}</span>
            </div>
          </div>
        </div>

        <span class="open-icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
            <path d="M5.5 6.45356L0.25 1.20356L1.19063 0.262939L5.5 4.59419L9.80937 0.284814L10.75 1.22544L5.5 6.45356Z" fill="currentColor"/>
          </svg>
        </span>
      </summary>
      <p>
        ${description}
      </p>
      <p>
        ${baseline === 'no_data' ? '' : html`<a href="https://github.com/web-platform-dx/web-features/blob/main/features/${feature.feature_id}.yml" target="_top">Learn more</a>`}
      </p>
    </details>`;
  }

  render() {
    const missingFeature = {
      baseline: {
        status: 'no_data',
      },
      name: this.featureId || 'Unknown feature',
    };
    if (!this.featureId) {
      return this.renderTemplate(missingFeature);
    }
    return this.fetchData.render({
      pending: () => this.renderTemplate(missingFeature, true),
      complete: (feature) => {
        if (!feature || !feature.baseline) {
          return this.renderTemplate(missingFeature);
        }
        return this.renderTemplate(feature);
      },
      error: () => this.renderTemplate(missingFeature),
    });
  }
}

window.customElements.define('baseline-status', BaselineStatus);
