/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {BaselineStatus} from '../baseline-status';
import {expect, fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

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

  it('renders baseline-low widget for an existing feature', async () => {
    window.fetch = async () => {
      return {
        ok: true,
        status: 200,
        json: () => ({
          "accent-color": {
            "description": "The accent-color CSS property sets a color for checkboxes, radio buttons, and other form controls.",
            "name": "accent-color",
            "spec": "https://drafts.csswg.org/css-ui-4/#widget-accent",
            "status": {
              "baseline": "low",
              "baseline_low_date": "2022-03-14",
              "support": {
                "chrome": "93",
                "chrome_android": "93",
                "edge": "93",
                "firefox": "92",
                "firefox_android": "92",
                "safari": "15.4",
                "safari_ios": "15.4"
              }
            }
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
          "array": {
            "description": "Arrays are ordered lists of JavaScript values.",
            "name": "Arrays (initial support)",
            "status": {
              "baseline": "high",
              "baseline_high_date": "2018-01-29",
              "baseline_low_date": "2015-07-29",
              "support": {
                "chrome": "1",
                "chrome_android": "18",
                "edge": "12",
                "firefox": "1",
                "firefox_android": "4",
                "safari": "1",
                "safari_ios": "1"
              }
            }
          }
        })
      }
    }
    const el = await fixture(html`<baseline-status featureId="array"></baseline-status>`);
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
});
