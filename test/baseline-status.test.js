// Copyright 2024 Google LLC

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     https://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
