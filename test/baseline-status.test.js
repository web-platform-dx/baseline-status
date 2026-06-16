import { BaselineStatus } from '../baseline-status';
import { expect, fixture, assert, aTimeout, waitUntil } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

describe('Baseline-status', () => {

  let realFetch = window.fetch

  beforeEach(function () {
    window.fetch = realFetch;
  });

  it('is defined', () => {
    const el = document.createElement('baseline-status');
    assert.instanceOf(el, BaselineStatus);
  })

  it('renders with default values', async () => {
    const el = await fixture(html`<baseline-status></baseline-status>`);
    await expect(el).shadowDom.to.equalSnapshot();
  })

  it('does not fetch without a feature id', async () => {
    const requests = [];
    window.fetch = async (url) => {
      requests.push(url);
      return {
        ok: true,
        status: 200,
        json: () => ({})
      }
    }

    const el = await fixture(html`<baseline-status></baseline-status>`);
    await el.updateComplete;
    // Let any async Task run attempt happen before asserting it did not fetch.
    await aTimeout(0);

    assert.equal(requests.length, 0);
  })

  it('does not fetch when feature-id is empty', async () => {
    const requests = [];
    window.fetch = async (url) => {
      requests.push(url);
      return {
        ok: true,
        status: 200,
        json: () => ({})
      }
    }

    const el = await fixture(html`<baseline-status feature-id=""></baseline-status>`);
    await el.updateComplete;
    // Let any async Task run attempt happen before asserting it did not fetch.
    await aTimeout(0);

    assert.equal(requests.length, 0);
  })

  it('fetches when feature-id is dynamically set and updated', async () => {
    const requests = [];
    window.fetch = async (url) => {
      requests.push(url);
      return {
        ok: true,
        status: 200,
        json: () => ({
          "name": "Dynamic feature",
          "baseline": {
            "status": "widely",
            "high_date": "2018-01-29",
            "low_date": "2015-07-29",
          },
          "browser_implementations": {}
        })
      }
    }

    const el = await fixture(html`<baseline-status></baseline-status>`);
    await el.updateComplete;
    // Let any async Task run attempt happen before asserting it did not fetch.
    await aTimeout(0);

    assert.equal(requests.length, 0);

    el.setAttribute('feature-id', 'array');
    await waitUntil(() => requests.length === 1, 'feature-id set should fetch once');

    assert.equal(requests.length, 1);
    assert.equal(requests[0], 'https://api.webstatus.dev/v1/features/array');

    el.setAttribute('feature-id', 'anchor-positioning');
    await waitUntil(() => requests.length === 2, 'feature-id update should fetch again');

    assert.equal(requests.length, 2);
    assert.equal(requests[1], 'https://api.webstatus.dev/v1/features/anchor-positioning');

    el.setAttribute('feature-id', '');
    // Clearing feature-id should not schedule another request.
    await aTimeout(0);

    assert.equal(requests.length, 2);
  })

  it('renders baseline-low widget for an existing feature', async () => {
    window.fetch = async () => {
      return {
        ok: true,
        status: 200,
        json: () => ({
          "description": "The accent-color CSS property sets a color for checkboxes, radio buttons, and other form controls.",
          "name": "accent-color",
          "baseline": {
            "status": "newly",
            "low_date": "2022-03-14",
          },
          "browser_implementations": {
            "chrome": "93",
            "chrome_android": "93",
            "edge": "93",
            "firefox": "92",
            "firefox_android": "92",
            "safari": "15.4",
            "safari_ios": "15.4"
          }
        })
      }
    }
    const el = await fixture(html`<baseline-status featureId="accent-color"></baseline-status>`);
    await expect(el).shadowDom.to.equalSnapshot();
  })

  it('renders baseline-high widget for an existing feature', async () => {
    window.fetch = async () => {
      return {
        ok: true,
        status: 200,
        json: () => ({
          "description": "Arrays are ordered lists of JavaScript values.",
          "name": "Arrays (initial support)",
          "baseline": {
            "status": "widely",
            "high_date": "2018-01-29",
            "low_date": "2015-07-29",
          },
          "browser_implementations": {
            "chrome": "93",
            "chrome_android": "93",
            "edge": "93",
            "firefox": "92",
            "firefox_android": "92",
            "safari": "15.4",
            "safari_ios": "15.4"
          }
        })
      }
    }
    const el = await fixture(html`<baseline-status featureId="array"></baseline-status>`);
    await expect(el).shadowDom.to.equalSnapshot();
  })

  it('renders baseline widget for a feature from feature-id attribute', async () => {
    window.fetch = async () => {
      return {
        ok: true,
        status: 200,
        json: () => ({
          "description": "Arrays are ordered lists of JavaScript values.",
          "name": "Arrays (initial support)",
          "baseline": {
            "status": "widely",
            "high_date": "2018-01-29",
            "low_date": "2015-07-29",
          },
          "browser_implementations": {
            "chrome": "93",
            "chrome_android": "93",
            "edge": "93",
            "firefox": "92",
            "firefox_android": "92",
            "safari": "15.4",
            "safari_ios": "15.4"
          }
        })
      }
    }
    const el = await fixture(html`<baseline-status feature-id="array"></baseline-status>`);
    await expect(el).shadowDom.to.equalSnapshot();
  })


  it('renders default widget for an unexisting feature', async () => {
    window.fetch = () => {
      return {
        ok: true,
        status: 200,
        json: () => ({})
      }
    }
    const el = await fixture(html`<baseline-status featureId="i-dont-exist"></baseline-status>`);
    await expect(el).shadowDom.to.equalSnapshot();
  })


  it('renders limited availability correctly when mobile support is missing', async () => {
    window.fetch = async () => {
      return {
        ok: true,
        status: 200,
        json: () => ({
          "name": "paint-order",
          "baseline": {
            "status": "limited"
          },
          "browser_implementations": {
            "chrome": { status: "available" },
            "chrome_android": { status: "available" },
            "edge": { status: "available" },
            "firefox": { status: "available" },
            "firefox_android": { status: "available" },
            "safari": { status: "available" }
            // safari_ios unavailable
          }
        })
      }
    }
    const el = await fixture(html`<baseline-status featureId="paint-order"></baseline-status>`);

    await expect(el).shadowDom.to.equalSnapshot();
  })

  it('renders upvote button when developer signals are present', async () => {
    window.fetch = async () => {
      return {
        ok: true,
        status: 200,
        json: () => ({
          "name": "grid",
          "baseline": {
            "status": "widely",
            "high_date": "2017-10-17",
            "low_date": "2017-10-17"
          },
          "browser_implementations": {
            "chrome": "57",
            "chrome_android": "57",
            "edge": "16",
            "firefox": "52",
            "firefox_android": "52",
            "safari": "10.1",
            "safari_ios": "10.1"
          },
          "developer_signals": {
            "link": "https://example.com/upvote",
            "upvotes": 42
          }
        })
      }
    }
    const el = await fixture(html`<baseline-status featureId="grid"></baseline-status>`);
    await expect(el).shadowDom.to.equalSnapshot();
  })
});
