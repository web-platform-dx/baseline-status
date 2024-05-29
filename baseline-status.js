/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import {LitElement, html, css} from 'lit';
import {Task} from '@lit/task';
// eslint-disable-next-line no-unused-vars
import BaselineIcon from './baseline-icon.js';

const ICONS = {
  chrome: html`<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none"><g clip-path="url(#a)"><path fill="#fff" d="M10.2 15.3a5.1 5.1 0 1 0 0-10.2 5.1 5.1 0 0 0 0 10.2Z"/><path fill="#229342" d="M5.783 12.75 1.367 5.103A10.198 10.198 0 0 0 10.201 20.4l4.416-7.65a5.098 5.098 0 0 1-8.834.001Z"/><path fill="#FBC116" d="M14.617 12.75 10.2 20.4a10.199 10.199 0 0 0 8.831-15.3H10.2a5.1 5.1 0 0 1 4.418 7.65Z"/><path fill="#229342" d="M10.2 14.238a4.038 4.038 0 1 0 0-8.075 4.038 4.038 0 0 0 0 8.075Z"/><path fill="#E33B2E" d="M10.2 5.1h8.833a10.198 10.198 0 0 0-17.666.002l4.416 7.649h.002a5.1 5.1 0 0 1 4.415-7.65Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20.4v20.4H0z"/></clipPath></defs></svg>`,
  edge: html`<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none"><g clip-path="url(#a)"><path fill="url(#b)" d="M18.416 15.18a7.485 7.485 0 0 1-.845.375 8.121 8.121 0 0 1-2.86.51c-3.77 0-7.053-2.59-7.053-5.92a2.51 2.51 0 0 1 1.307-2.176c-3.41.143-4.287 3.697-4.287 5.777 0 5.897 5.427 6.487 6.598 6.487.63 0 1.578-.184 2.152-.367l.103-.032a10.224 10.224 0 0 0 5.307-4.207.319.319 0 0 0-.422-.447Z"/><path fill="url(#c)" d="M18.416 15.18a7.485 7.485 0 0 1-.845.375 8.121 8.121 0 0 1-2.86.51c-3.77 0-7.053-2.59-7.053-5.92a2.51 2.51 0 0 1 1.307-2.176c-3.41.143-4.287 3.697-4.287 5.777 0 5.897 5.427 6.487 6.598 6.487.63 0 1.578-.184 2.152-.367l.103-.032a10.224 10.224 0 0 0 5.307-4.207.319.319 0 0 0-.422-.447Z" opacity=".35"/><path fill="url(#d)" d="M8.423 19.229a6.31 6.31 0 0 1-1.809-1.698A6.43 6.43 0 0 1 8.965 7.97c.255-.12.677-.327 1.243-.319a2.582 2.582 0 0 1 2.048 1.036c.32.431.497.953.502 1.49 0-.016 1.953-6.343-6.375-6.343-3.498 0-6.375 3.315-6.375 6.232-.014 1.54.316 3.065.964 4.462a10.2 10.2 0 0 0 12.464 5.34 6.015 6.015 0 0 1-5.005-.638h-.008Z"/><path fill="url(#e)" d="M8.423 19.229a6.31 6.31 0 0 1-1.809-1.698A6.43 6.43 0 0 1 8.965 7.97c.255-.12.677-.327 1.243-.319a2.582 2.582 0 0 1 2.048 1.036c.32.431.497.953.502 1.49 0-.016 1.953-6.343-6.375-6.343-3.498 0-6.375 3.315-6.375 6.232-.014 1.54.316 3.065.964 4.462a10.2 10.2 0 0 0 12.464 5.34 6.015 6.015 0 0 1-5.005-.638h-.008Z" opacity=".41"/><path fill="url(#f)" d="M12.145 11.857c-.072.08-.271.2-.271.447 0 .207.135.414.382.582 1.14.796 3.3.685 3.307.685a4.75 4.75 0 0 0 2.415-.662A4.893 4.893 0 0 0 20.4 8.694c.024-1.785-.637-2.972-.9-3.498C17.802 1.896 14.16 0 10.2 0A10.2 10.2 0 0 0 0 10.057c.04-2.909 2.933-5.26 6.375-5.26.28 0 1.873.024 3.347.797a5.786 5.786 0 0 1 2.463 2.335c.486.845.573 1.92.573 2.35 0 .431-.215 1.06-.621 1.587l.008-.008Z"/><path fill="url(#g)" d="M12.145 11.857c-.072.08-.271.2-.271.447 0 .207.135.414.382.582 1.14.796 3.3.685 3.307.685a4.75 4.75 0 0 0 2.415-.662A4.893 4.893 0 0 0 20.4 8.694c.024-1.785-.637-2.972-.9-3.498C17.802 1.896 14.16 0 10.2 0A10.2 10.2 0 0 0 0 10.057c.04-2.909 2.933-5.26 6.375-5.26.28 0 1.873.024 3.347.797a5.786 5.786 0 0 1 2.463 2.335c.486.845.573 1.92.573 2.35 0 .431-.215 1.06-.621 1.587l.008-.008Z"/></g><defs><radialGradient id="c" cx="0" cy="0" r="1" gradientTransform="matrix(7.60219 0 0 7.22208 12.527 14.212)" gradientUnits="userSpaceOnUse"><stop offset=".7" stop-opacity="0"/><stop offset=".9" stop-opacity=".5"/><stop offset="1"/></radialGradient><radialGradient id="e" cx="0" cy="0" r="1" gradientTransform="rotate(-81.384 12.03 4.657) scale(11.4261 9.23112)" gradientUnits="userSpaceOnUse"><stop offset=".8" stop-opacity="0"/><stop offset=".9" stop-opacity=".5"/><stop offset="1"/></radialGradient><radialGradient id="f" cx="0" cy="0" r="1" gradientTransform="rotate(92.291 -.78 2.876) scale(16.1416 34.3784)" gradientUnits="userSpaceOnUse"><stop stop-color="#35C1F1"/><stop offset=".1" stop-color="#34C1ED"/><stop offset=".2" stop-color="#2FC2DF"/><stop offset=".3" stop-color="#2BC3D2"/><stop offset=".7" stop-color="#36C752"/></radialGradient><radialGradient id="g" cx="0" cy="0" r="1" gradientTransform="matrix(2.171 7.44345 -6.05301 1.76546 19.13 6.16)" gradientUnits="userSpaceOnUse"><stop stop-color="#66EB6E"/><stop offset="1" stop-color="#66EB6E" stop-opacity="0"/></radialGradient><linearGradient id="b" x1="4.678" x2="18.894" y1="14.105" y2="14.105" gradientUnits="userSpaceOnUse"><stop stop-color="#0C59A4"/><stop offset="1" stop-color="#114A8B"/></linearGradient><linearGradient id="d" x1="12.168" x2="3.299" y1="7.937" y2="17.603" gradientUnits="userSpaceOnUse"><stop stop-color="#1B9DE2"/><stop offset=".2" stop-color="#1595DF"/><stop offset=".7" stop-color="#0680D7"/><stop offset="1" stop-color="#0078D4"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h20.4v20.4H0z"/></clipPath></defs></svg>`,
  firefox: html`<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none"><g clip-path="url(#M)"><path d="M19.661 6.85c-.444-1.034-1.344-2.15-2.049-2.503.503.942.851 1.955 1.034 3l.002.017c-1.155-2.786-3.112-3.911-4.711-6.358l-.241-.379-.113-.204a1.76 1.76 0 0 1-.152-.392c-.011-.022-.017-.025-.023-.026-.021 0-.023.002-.024.003l-.003-.003C10.816 1.46 9.945 4.152 9.866 5.499c-1.025.068-2.004.434-2.811 1.049a3.05 3.05 0 0 0-.263-.193c-.233-.789-.243-1.623-.029-2.417-.942.442-1.779 1.068-2.458 1.84H4.3c-.405-.497-.376-2.135-.353-2.477-.12.047-.234.105-.341.175-.357.247-.691.524-.998.828-.35.343-.669.714-.955 1.109v.002-.002a8.22 8.22 0 0 0-1.37 2.995l-.014.065c-.019.087-.089.523-.1.617 0 .007-.002.014-.002.022A9.14 9.14 0 0 0 0 10.475v.051c.005 2.474.967 4.857 2.697 6.678s4.103 2.948 6.649 3.158a10.45 10.45 0 0 0 7.105-2.023c2.023-1.511 3.388-3.702 3.825-6.14l.046-.383c.21-1.683-.017-3.391-.662-4.967l.001.002zm-11.77 7.741l.141.067.007.004-.149-.072zm10.758-7.224v-.009l.002.01-.002-.001z" fill="url(#A)"/><use xlink:href="#N" fill="url(#B)"/><use xlink:href="#N" fill="url(#C)"/><path d="M14.697 8.011l.064.045c-.257-.44-.576-.844-.949-1.198C10.637 3.784 12.98.194 13.375.01l.004-.006c-2.565 1.454-3.436 4.146-3.515 5.493l.359-.018c.91.002 1.803.237 2.589.681a5.07 5.07 0 0 1 1.885 1.849v.001z" fill="url(#D)"/><use xlink:href="#O" fill="url(#E)"/><use xlink:href="#O" fill="url(#F)"/><path d="M6.576 6.22l.211.135c-.233-.789-.243-1.623-.029-2.417-.942.442-1.779 1.068-2.458 1.84.05-.001 1.531-.027 2.276.442z" fill="url(#G)"/><path d="M.093 10.761c.788 4.508 5.009 7.952 9.799 8.083 4.434.121 7.267-2.371 8.437-4.802.991-2.102 1.105-4.493.318-6.674v-.009l.002.007c.362 2.29-.841 4.508-2.722 6.011l-.006.013c-3.665 2.891-7.172 1.744-7.881 1.276l-.149-.072c-2.137-.989-3.02-2.873-2.83-4.49-.507.007-1.006-.128-1.435-.39s-.771-.638-.984-1.084c.561-.333 1.2-.521 1.858-.546a3.96 3.96 0 0 1 1.897.4 5.24 5.24 0 0 0 3.834.146c-.004-.08-1.781-.765-2.474-1.426-.37-.353-.546-.524-.702-.651-.084-.069-.172-.134-.263-.193l-.211-.135c-.745-.469-2.226-.443-2.275-.442h-.005c-.405-.497-.376-2.135-.353-2.477-.12.047-.234.105-.341.175-.357.247-.691.524-.998.828-.351.342-.672.712-.959 1.107A8.22 8.22 0 0 0 .28 8.409c-.005.02-.368 1.556-.189 2.353h.002z" fill="url(#H)"/><path d="M13.812 6.858c.373.355.692.758.948 1.199l.153.121c2.315 2.067 1.102 4.988 1.012 5.195 1.881-1.5 3.083-3.72 2.722-6.011-1.155-2.789-3.114-3.914-4.711-6.361l-.241-.379-.113-.204a1.76 1.76 0 0 1-.152-.392c-.011-.022-.017-.025-.023-.026-.021 0-.023.002-.024.003-.402.185-2.745 3.777.43 6.849l-.001.004z" fill="url(#I)"/><path d="M14.913 8.179c-.045-.04-.097-.08-.153-.121l-.063-.045c-.718-.482-1.596-.688-2.462-.579 3.673 1.778 2.688 7.902-2.403 7.672-.453-.018-.901-.102-1.329-.248l-.3-.119-.172-.08.007.004c.71.469 4.216 1.616 7.881-1.276l.006-.013c.091-.207 1.305-3.128-1.012-5.195l.001-.001z" fill="url(#J)"/><path d="M5.625 11.419S6.096 9.718 9 9.718c.314 0 1.212-.848 1.228-1.094a5.24 5.24 0 0 1-3.834-.146 3.96 3.96 0 0 0-1.897-.4c-.657.026-1.297.214-1.858.546.213.446.555.822.984 1.084s.928.397 1.435.39c-.189 1.617.694 3.5 2.83 4.49l.141.067c-1.247-.624-2.277-1.804-2.405-3.235v-.001z" fill="url(#K)"/><path d="M19.661 6.845c-.444-1.034-1.344-2.15-2.049-2.503a10.05 10.05 0 0 1 1.034 3l.002.017c-1.155-2.786-3.112-3.911-4.711-6.358l-.241-.379-.112-.204c-.066-.124-.117-.256-.152-.392-.011-.022-.017-.025-.023-.026-.02 0-.023.002-.024.003l-.003-.003c-2.565 1.454-3.436 4.146-3.515 5.493l.359-.018c.91.002 1.803.237 2.589.681a5.07 5.07 0 0 1 1.885 1.849c-.718-.482-1.596-.688-2.462-.579 3.673 1.778 2.688 7.902-2.403 7.672-.453-.018-.901-.102-1.329-.248l-.3-.119-.172-.08.007.004-.149-.072.141.067c-1.247-.624-2.277-1.804-2.405-3.235 0 0 .471-1.701 3.375-1.701.314 0 1.212-.848 1.228-1.094-.004-.08-1.781-.765-2.474-1.426l-.702-.651a3.05 3.05 0 0 0-.263-.193c-.233-.789-.243-1.623-.029-2.417-.942.442-1.779 1.068-2.458 1.84H4.3c-.405-.497-.376-2.135-.353-2.477-.12.047-.234.105-.341.175-.357.247-.691.524-.998.828-.35.343-.669.714-.955 1.109a8.22 8.22 0 0 0-1.37 2.995l-.014.065-.118.624A11.15 11.15 0 0 0 0 10.473v.051c.005 2.474.967 4.857 2.697 6.678S6.8 20.15 9.347 20.36a10.45 10.45 0 0 0 7.105-2.023c2.023-1.511 3.388-3.702 3.825-6.14l.046-.383c.21-1.683-.017-3.391-.662-4.967l.001-.001z" fill="url(#L)"/></g><defs><linearGradient id="A" x1="18.309" y1="3.165" x2="1.883" y2="19.533" xlink:href="#P"><stop offset=".048" stop-color="#fff44f"/><stop offset=".111" stop-color="#ffe847"/><stop offset=".225" stop-color="#ffc830"/><stop offset=".368" stop-color="#ff980e"/><stop offset=".401" stop-color="#ff8b16"/><stop offset=".462" stop-color="#ff672a"/><stop offset=".534" stop-color="#ff3647"/><stop offset=".705" stop-color="#e31587"/></linearGradient><radialGradient id="B" cx="0" cy="0" r="1" gradientTransform="translate(17.6533 2.30078) scale(21.2899 20.6149)" xlink:href="#P"><stop offset=".129" stop-color="#ffbd4f"/><stop offset=".186" stop-color="#ffac31"/><stop offset=".247" stop-color="#ff9d17"/><stop offset=".283" stop-color="#ff980e"/><stop offset=".403" stop-color="#ff563b"/><stop offset=".467" stop-color="#ff3750"/><stop offset=".71" stop-color="#f5156c"/><stop offset=".782" stop-color="#eb0878"/><stop offset=".86" stop-color="#e50080"/></radialGradient><radialGradient id="C" cx="0" cy="0" r="1" gradientTransform="matrix(21.2899,0,0,20.6149,9.74862,10.7203)" xlink:href="#P"><stop offset=".3" stop-color="#960e18"/><stop offset=".351" stop-color="#b11927" stop-opacity=".74"/><stop offset=".435" stop-color="#db293d" stop-opacity=".343"/><stop offset=".497" stop-color="#f5334b" stop-opacity=".094"/><stop offset=".53" stop-color="#ff3750" stop-opacity="0"/></radialGradient><radialGradient id="D" cx="0" cy="0" r="1" gradientTransform="translate(12.3835 -2.29164) scale(15.422 14.9331)" xlink:href="#P"><stop offset=".132" stop-color="#fff44f"/><stop offset=".252" stop-color="#ffdc3e"/><stop offset=".506" stop-color="#ff9d12"/><stop offset=".526" stop-color="#ff980e"/></radialGradient><radialGradient id="E" cx="0" cy="0" r="1" gradientTransform="translate(7.37722 16.0781) scale(10.1364 9.81506)" xlink:href="#P"><stop offset=".353" stop-color="#3a8ee6"/><stop offset=".472" stop-color="#5c79f0"/><stop offset=".669" stop-color="#9059ff"/><stop offset="1" stop-color="#c139e6"/></radialGradient><radialGradient id="F" cx="0" cy="0" r="1" gradientTransform="matrix(5.224671177371898,-1.223117268801049,1.391360771064786,5.943340596469464,10.7783,8.95064)" xlink:href="#P"><stop offset=".206" stop-color="#9059ff" stop-opacity="0"/><stop offset=".278" stop-color="#8c4ff3" stop-opacity=".064"/><stop offset=".747" stop-color="#7716a8" stop-opacity=".45"/><stop offset=".975" stop-color="#6e008b" stop-opacity=".6"/></radialGradient><radialGradient id="G" cx="0" cy="0" r="1" gradientTransform="translate(9.48499 1.53538) scale(7.29338 7.06215)" xlink:href="#P"><stop stop-color="#ffe226"/><stop offset=".121" stop-color="#ffdb27"/><stop offset=".295" stop-color="#ffc82a"/><stop offset=".502" stop-color="#ffa930"/><stop offset=".732" stop-color="#ff7e37"/><stop offset=".792" stop-color="#ff7139"/></radialGradient><radialGradient id="H" cx="0" cy="0" r="1" gradientTransform="translate(15.2817 -3.05706) scale(31.1181 30.1315)" xlink:href="#P"><stop offset=".113" stop-color="#fff44f"/><stop offset=".456" stop-color="#ff980e"/><stop offset=".622" stop-color="#ff5634"/><stop offset=".716" stop-color="#ff3647"/><stop offset=".904" stop-color="#e31587"/></radialGradient><radialGradient id="I" cx="0" cy="0" r="1" gradientTransform="translate(12.6953 -1.38643) rotate(83.7803) scale(22.0889 14.9604)" xlink:href="#P"><stop stop-color="#fff44f"/><stop offset=".06" stop-color="#ffe847"/><stop offset=".168" stop-color="#ffc830"/><stop offset=".304" stop-color="#ff980e"/><stop offset=".356" stop-color="#ff8b16"/><stop offset=".455" stop-color="#ff672a"/><stop offset=".57" stop-color="#ff3647"/><stop offset=".737" stop-color="#e31587"/></radialGradient><radialGradient id="J" cx="0" cy="0" r="1" gradientTransform="translate(9.485 4.08674) scale(19.4244 18.8086)" xlink:href="#P"><stop offset=".137" stop-color="#fff44f"/><stop offset=".48" stop-color="#ff980e"/><stop offset=".592" stop-color="#ff5634"/><stop offset=".655" stop-color="#ff3647"/><stop offset=".904" stop-color="#e31587"/></radialGradient><radialGradient id="K" cx="0" cy="0" r="1" gradientTransform="translate(14.4914 5.10728) scale(21.2609 20.5869)" xlink:href="#P"><stop offset=".094" stop-color="#fff44f"/><stop offset=".231" stop-color="#ffe141"/><stop offset=".509" stop-color="#ffaf1e"/><stop offset=".626" stop-color="#ff980e"/></radialGradient><linearGradient id="L" x1="18.103" y1="3.076" x2="4.144" y2="17.494" xlink:href="#P"><stop offset=".167" stop-color="#fff44f" stop-opacity=".8"/><stop offset=".266" stop-color="#fff44f" stop-opacity=".634"/><stop offset=".489" stop-color="#fff44f" stop-opacity=".217"/><stop offset=".6" stop-color="#fff44f" stop-opacity="0"/></linearGradient><clipPath id="M"><path fill="#fff" d="M0 0h20.4v20.4H0z"/></clipPath><path id="N" d="M19.661 6.85c-.444-1.034-1.344-2.15-2.049-2.503.503.942.851 1.955 1.034 3v.009l.002.01c.787 2.181.673 4.573-.318 6.674-1.17 2.432-4.002 4.924-8.437 4.802-4.79-.131-9.011-3.574-9.799-8.083-.144-.711 0-1.072.072-1.649-.098.449-.153.906-.164 1.364v.051c.005 2.474.967 4.857 2.697 6.678s4.103 2.948 6.649 3.158a10.45 10.45 0 0 0 7.105-2.023c2.023-1.511 3.388-3.702 3.825-6.14l.046-.383c.21-1.684-.017-3.391-.663-4.968l-.001.001z"/><path id="O" d="M10.228 8.626C10.211 8.872 9.314 9.72 9 9.72c-2.904 0-3.375 1.701-3.375 1.701.129 1.432 1.159 2.613 2.405 3.235l.172.08.3.119c.428.146.876.23 1.329.248 5.091.231 6.076-5.894 2.403-7.672.867-.109 1.744.097 2.462.579-.449-.767-1.099-1.405-1.885-1.849s-1.679-.679-2.589-.681l-.359.018c-1.025.068-2.004.434-2.811 1.049.156.128.331.298.702.651.693.661 2.47 1.346 2.474 1.426v.002z"/><linearGradient id="P" gradientUnits="userSpaceOnUse"/></defs></svg>`,
  safari: html`<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" xmlns:v="https://vecta.io/nano"><g clip-path="url(#D)"><path opacity=".53" d="M19.505 10.524a8.76 8.76 0 0 1-.708 3.447c-.468 1.093-1.153 2.086-2.017 2.922a9.33 9.33 0 0 1-3.018 1.953 9.57 9.57 0 0 1-7.121 0 9.33 9.33 0 0 1-3.018-1.953c-.864-.836-1.549-1.83-2.017-2.922a8.76 8.76 0 0 1-.708-3.447c0-2.389.98-4.68 2.725-6.37s4.111-2.638 6.579-2.638a9.57 9.57 0 0 1 3.56.686 9.33 9.33 0 0 1 3.018 1.953c.864.837 1.549 1.83 2.017 2.923a8.76 8.76 0 0 1 .708 3.447z" fill="#000"/><path d="M19.859 9.729c0 1.275-.25 2.538-.735 3.716s-1.197 2.249-2.094 3.151-1.962 1.617-3.133 2.105a9.61 9.61 0 0 1-3.696.739 9.63 9.63 0 0 1-6.829-2.844 9.74 9.74 0 0 1 0-13.734A9.63 9.63 0 0 1 10.201.018a9.61 9.61 0 0 1 3.696.739c1.172.488 2.236 1.203 3.133 2.105s1.608 1.972 2.094 3.151.735 2.441.735 3.716z" fill="url(#B)" stroke="#cdcdcd" stroke-width=".352" stroke-linejoin="round"/><path d="M19.102 9.729c0 2.374-.938 4.65-2.607 6.329s-3.933 2.621-6.294 2.621-4.625-.943-6.294-2.621-2.607-3.955-2.607-6.329.938-4.65 2.607-6.329S7.84.778 10.201.778s4.625.943 6.294 2.621 2.607 3.955 2.607 6.329z" fill="url(#C)"/><path d="M10.2 1.245a.13.13 0 0 0-.13.13v1.505a.13.13 0 0 0 .13.13.13.13 0 0 0 .13-.13V1.376a.13.13 0 0 0-.13-.13zm-.849.054c-.009-.001-.017-.001-.026 0a.13.13 0 0 0-.116.143l.065.63a.13.13 0 0 0 .143.116.13.13 0 0 0 .116-.143l-.065-.63a.13.13 0 0 0-.116-.116zm1.704.001a.13.13 0 0 0-.116.116l-.066.63a.13.13 0 0 0 .115.143.13.13 0 0 0 .143-.116l.066-.63a.13.13 0 0 0-.116-.143c-.009-.001-.018-.001-.026 0zm-2.576.127c-.009 0-.017.001-.026.003a.13.13 0 0 0-.1.155l.31 1.473a.13.13 0 0 0 .154.101.13.13 0 0 0 .1-.155l-.31-1.473a.13.13 0 0 0-.128-.103zm3.448.001a.13.13 0 0 0-.128.103l-.311 1.472a.13.13 0 0 0 .1.155.13.13 0 0 0 .154-.101l.311-1.472a.13.13 0 0 0-.1-.155c-.009-.002-.018-.003-.026-.003zm-4.28.235c-.017-.002-.034 0-.051.006a.13.13 0 0 0-.083.164l.195.602c.022.069.095.106.164.084a.13.13 0 0 0 .083-.164l-.195-.602a.13.13 0 0 0-.112-.09zm5.108 0a.13.13 0 0 0-.112.09l-.195.602a.13.13 0 0 0 .083.164c.068.022.141-.015.164-.084l.195-.602a.13.13 0 0 0-.135-.17zm-5.931.303c-.017 0-.034.004-.05.011a.13.13 0 0 0-.066.172l.608 1.375c.029.066.106.096.171.066a.13.13 0 0 0 .066-.172l-.608-1.375a.13.13 0 0 0-.121-.078zm6.764.005a.13.13 0 0 0-.121.077l-.61 1.375a.13.13 0 0 0 .066.172c.066.029.142 0 .171-.066l.61-1.375c.029-.066 0-.143-.066-.172a.13.13 0 0 0-.05-.011zm-7.528.402c-.025-.002-.051.004-.074.017a.13.13 0 0 0-.048.178l.315.548c.036.063.115.084.177.048s.083-.116.048-.178l-.315-.548a.13.13 0 0 0-.103-.065zm8.281 0c-.041.003-.081.026-.103.065l-.315.548c-.036.063-.015.142.048.178s.141.015.177-.048l.315-.548c.036-.063.015-.142-.048-.178-.023-.014-.049-.019-.074-.017zm-9.023.465a.13.13 0 0 0-.072.025c-.058.042-.071.124-.029.182l.879 1.218c.042.059.123.071.181.029s.071-.124.029-.182l-.879-1.218c-.026-.037-.068-.055-.109-.054zm9.774.007c-.042-.002-.083.017-.11.054l-.881 1.217c-.042.058-.03.14.029.182s.139.03.181-.029l.881-1.217c.042-.058.03-.14-.029-.182-.022-.016-.047-.024-.072-.025zm-10.437.553c-.033-.002-.067.009-.094.033-.053.048-.058.131-.01.184l.421.471c.048.054.13.058.183.01s.058-.131.01-.184l-.421-.471c-.024-.027-.057-.041-.09-.043zm11.092.001a.13.13 0 0 0-.09.043l-.421.47c-.048.054-.044.136.01.184s.135.044.183-.01l.421-.47c.048-.054.044-.136-.01-.184-.027-.024-.061-.035-.094-.033zM4.019 4.01a.13.13 0 0 0-.09.043c-.048.054-.044.136.01.184l1.113 1.007c.053.048.135.044.183-.01s.044-.136-.01-.184L4.113 4.043c-.027-.024-.06-.035-.094-.033zm12.366.004c-.033-.002-.067.009-.094.033l-1.113 1.006c-.053.048-.058.131-.01.184s.13.058.183.01l1.113-1.006c.053-.048.058-.131.01-.184-.024-.027-.056-.041-.09-.043zm-12.895.679c-.042-.002-.083.017-.109.054-.042.058-.029.14.029.182l.509.372c.058.042.139.03.181-.029s.029-.14-.029-.182l-.509-.372c-.022-.016-.047-.024-.072-.025zm13.423.005a.13.13 0 0 0-.072.025l-.51.372c-.058.042-.071.124-.029.182s.123.071.181.029l.51-.372c.058-.042.071-.124.029-.182-.026-.037-.068-.055-.11-.054zm-13.916.724c-.042.003-.081.026-.103.065a.13.13 0 0 0 .047.178l1.296.753c.062.036.141.015.177-.048a.13.13 0 0 0-.048-.178l-1.296-.753c-.023-.014-.049-.019-.074-.017zm14.407 0c-.025-.002-.051.004-.074.017l-1.296.753a.13.13 0 0 0-.047.178c.036.063.115.084.177.048l1.297-.753c.062-.036.083-.116.047-.178a.13.13 0 0 0-.103-.065zm-14.78.777c-.051-.001-.099.028-.121.077a.13.13 0 0 0 .066.172l.575.258c.066.029.142 0 .171-.066a.13.13 0 0 0-.066-.172l-.575-.258c-.016-.007-.033-.011-.05-.011zm15.156.005a.13.13 0 0 0-.051.011l-.575.257a.13.13 0 0 0-.066.172c.029.066.106.096.171.066l.575-.258a.13.13 0 0 0 .066-.172.13.13 0 0 0-.121-.077zm-15.489.807a.13.13 0 0 0-.112.09.13.13 0 0 0 .083.165l1.423.466c.068.022.141-.015.164-.084a.13.13 0 0 0-.083-.165l-1.423-.466c-.017-.006-.035-.007-.051-.006zm15.821.006c-.017-.002-.034 0-.051.006l-1.424.465a.13.13 0 0 0-.083.164c.022.069.095.106.164.084l1.423-.465a.13.13 0 0 0 .083-.164.13.13 0 0 0-.112-.09zm-16.028.847a.13.13 0 0 0-.128.103.13.13 0 0 0 .1.155l.616.132a.13.13 0 1 0 .054-.255l-.616-.132c-.009-.002-.018-.003-.026-.003zm16.234.001c-.009 0-.017.001-.026.003l-.616.132a.13.13 0 1 0 .054.255l.616-.132a.13.13 0 0 0 .1-.155.13.13 0 0 0-.128-.103zm-16.391.856a.13.13 0 0 0-.116.116.13.13 0 0 0 .115.143l1.489.158a.13.13 0 1 0 .027-.26l-1.489-.158c-.009-.001-.018-.001-.026 0zm16.549.011c-.009-.001-.017-.001-.026 0l-1.489.156a.13.13 0 1 0 .027.26l1.489-.156a.13.13 0 0 0 .116-.143.13.13 0 0 0-.116-.116zm-16.574.866a.13.13 0 1 0 0 .261h.63a.13.13 0 1 0 0-.261h-.63zm15.969 0a.13.13 0 1 0 0 .261h.63a.13.13 0 1 0 0-.261h-.63zm-14.43.711c-.009-.001-.017-.001-.026 0l-1.489.156a.13.13 0 1 0 .027.26l1.489-.156a.13.13 0 0 0 .116-.143.13.13 0 0 0-.116-.116zm13.521.009a.13.13 0 0 0-.116.116.13.13 0 0 0 .115.143l1.489.158a.13.13 0 1 0 .027-.26l-1.489-.158a.13.13 0 0 0-.026 0zm-14.263.882c-.009 0-.017.001-.026.003l-.616.131a.13.13 0 1 0 .054.255l.616-.131a.13.13 0 0 0 .1-.155.13.13 0 0 0-.128-.103zm15.006.001a.13.13 0 0 0-.128.103.13.13 0 0 0 .1.155l.616.132a.13.13 0 1 0 .054-.255l-.616-.132c-.009-.002-.018-.003-.026-.003zm-13.968.514c-.017-.002-.034 0-.051.006l-1.424.465a.13.13 0 1 0 .08.248l1.424-.465a.13.13 0 0 0 .083-.165.13.13 0 0 0-.112-.09zm12.93.005a.13.13 0 0 0-.112.09.13.13 0 0 0 .083.165l1.423.466c.068.022.141-.015.164-.084a.13.13 0 0 0-.083-.165l-1.423-.466a.13.13 0 0 0-.051-.006zM3.192 12.735a.13.13 0 0 0-.05.011l-.575.258a.13.13 0 0 0-.066.172c.029.066.106.095.171.066l.575-.258a.13.13 0 0 0 .066-.172.13.13 0 0 0-.121-.078zm14.016.005c-.051-.001-.099.028-.121.077a.13.13 0 0 0 .066.172l.575.258c.066.029.142 0 .171-.066a.13.13 0 0 0-.066-.172l-.575-.258c-.016-.007-.034-.011-.05-.011zm-12.896.283c-.025-.002-.051.004-.074.017l-1.296.753c-.062.036-.083.116-.047.178s.115.084.177.048l1.296-.752c.062-.036.083-.116.048-.178-.022-.039-.062-.062-.103-.065zm11.778 0c-.042.003-.081.026-.103.065a.13.13 0 0 0 .047.178l1.296.752c.062.036.141.015.177-.048s.015-.142-.047-.178l-1.297-.753c-.023-.014-.049-.019-.074-.017zM3.988 14.127a.13.13 0 0 0-.072.025l-.51.372c-.058.043-.071.124-.029.182s.123.071.181.029l.51-.372c.058-.043.071-.124.029-.182-.026-.037-.068-.055-.109-.054zm12.421.004c-.042-.002-.083.017-.11.054-.042.059-.029.14.029.182l.509.372c.058.042.139.03.181-.029s.029-.14-.029-.182l-.509-.372c-.022-.016-.047-.024-.072-.025zm-11.267.045c-.033-.002-.067.009-.094.033l-1.113 1.006a.13.13 0 0 0-.01.184c.048.054.13.058.183.01l1.113-1.006c.053-.048.058-.13.01-.184-.024-.027-.056-.041-.09-.043zm10.113.004a.13.13 0 0 0-.09.043c-.048.054-.044.136.01.184l1.113 1.007c.053.048.135.044.183-.01s.044-.136-.01-.184l-1.113-1.007c-.027-.024-.061-.035-.094-.034zm-9.057.956c-.042-.002-.083.017-.11.054l-.881 1.217c-.042.058-.03.14.029.182s.139.03.181-.029l.881-1.217c.042-.059.03-.14-.029-.182-.022-.016-.047-.024-.072-.025zm7.996.005a.13.13 0 0 0-.072.025c-.058.043-.071.124-.029.182l.879 1.218c.042.058.123.072.181.029s.071-.124.029-.182l-.879-1.218c-.026-.037-.068-.055-.109-.054zm-9.133.188a.13.13 0 0 0-.09.043l-.421.47c-.048.054-.044.136.01.184s.135.044.183-.01l.421-.471c.048-.054.044-.136-.01-.184-.027-.024-.06-.035-.094-.034zm10.276.001c-.033-.002-.067.009-.094.034-.053.048-.058.13-.01.184l.421.471c.048.054.13.058.183.01s.058-.131.01-.184l-.421-.47a.13.13 0 0 0-.09-.043zm-7.91.522c-.051-.001-.099.028-.121.077l-.61 1.374a.13.13 0 0 0 .066.172c.066.029.142 0 .171-.066l.61-1.375a.13.13 0 0 0-.066-.172c-.016-.007-.034-.011-.05-.011zm5.536.004c-.017 0-.034.004-.05.011a.13.13 0 0 0-.066.172l.608 1.375c.029.066.106.096.171.066a.13.13 0 0 0 .066-.172l-.608-1.375c-.022-.05-.07-.079-.121-.078zm-6.608.421c-.042.003-.081.026-.103.065l-.315.548c-.036.063-.015.142.048.178s.141.015.177-.048l.315-.548a.13.13 0 0 0-.048-.178c-.023-.014-.049-.019-.074-.017zm7.688 0c-.025-.002-.051.004-.074.017a.13.13 0 0 0-.047.178l.315.548c.036.063.115.084.177.048s.083-.116.048-.178l-.315-.548c-.022-.039-.062-.062-.103-.065zm-5.258.02a.13.13 0 0 0-.128.103l-.311 1.472a.13.13 0 0 0 .1.155.13.13 0 0 0 .154-.101l.311-1.472a.13.13 0 0 0-.1-.155c-.009-.002-.018-.003-.026-.003zm2.824.001c-.009 0-.017.001-.026.003a.13.13 0 0 0-.1.155l.31 1.473a.13.13 0 0 0 .154.101.13.13 0 0 0 .1-.155l-.31-1.473a.13.13 0 0 0-.128-.103zm-1.41.149a.13.13 0 0 0-.13.13v1.505a.13.13 0 0 0 .13.13.13.13 0 0 0 .13-.13v-1.505a.13.13 0 0 0-.13-.13zm-2.382.486a.13.13 0 0 0-.112.09l-.195.602a.13.13 0 0 0 .083.164c.068.022.141-.015.164-.084l.195-.602a.13.13 0 0 0-.135-.171zm4.763 0c-.017-.002-.034 0-.051.006a.13.13 0 0 0-.083.165l.195.602a.13.13 0 0 0 .164.084.13.13 0 0 0 .083-.164l-.195-.602a.13.13 0 0 0-.112-.09zm-3.196.335a.13.13 0 0 0-.116.116l-.066.63a.13.13 0 0 0 .116.143.13.13 0 0 0 .143-.116l.066-.63a.13.13 0 0 0-.115-.143c-.009-.001-.018-.001-.026 0zm1.624.001c-.009-.001-.018-.001-.026 0a.13.13 0 0 0-.116.143l.065.63a.13.13 0 0 0 .143.116.13.13 0 0 0 .116-.143l-.065-.63a.13.13 0 0 0-.116-.116z" fill="#f4f2f3"/><g opacity=".409" filter="url(#A)"><path d="M16.283 4.509l-7.1 4.148-4.489 7.106 6.567-4.891 5.022-6.363z" fill="#000"/></g><path d="M11.218 10.8L9.183 8.657l7.22-4.883-5.184 7.026z" fill="#ff5150"/><path d="M11.218 10.8L9.183 8.657l-5.184 7.026 7.22-4.883z" fill="#f1f1f1"/><path opacity=".243" d="M3.999 15.684l7.22-4.883 5.184-7.026-12.404 11.91z" fill="#000"/></g><defs><filter id="A" x="2.149" y="1.964" width="16.679" height="16.344" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0"/><feBlend in="SourceGraphic"/><feGaussianBlur stdDeviation="1.272"/></filter><linearGradient id="B" x1="10.2" y1="19.44" x2="10.2" y2=".017" gradientUnits="userSpaceOnUse"><stop stop-color="#bdbdbd"/><stop offset="1" stop-color="#fff"/></linearGradient><radialGradient id="C" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.2407 8.42366) scale(9.65803 9.71116)"><stop stop-color="#06c2e7"/><stop offset=".25" stop-color="#0db8ec"/><stop offset=".5" stop-color="#12aef1"/><stop offset=".75" stop-color="#1f86f9"/><stop offset="1" stop-color="#107ddd"/></radialGradient><clipPath id="D"><path fill="#fff" d="M0 0h20.4v20.4H0z"/></clipPath></defs></svg>`
};

const API_ENDPOINT = 'https://api.webstatus.dev/v1/features/'

const BASELINE_DEFS = {
  'limited': {
    title: 'Limited',
    description: 'This feature is not Baseline because it does not work in some of the most widely-used browsers.',
  },
  'newly': {
    title: '',
    description: 'his feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.'
  },
  'widely': {
    title: 'Widely Available',
    description: 'This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.'
  },
  'loading': {
    title: 'Loading',
    description: ''
  },
  'no_data': {
    title: 'Unknown availability',
    description: 'We currently don’t have browser support information about this feature.'
  }
};

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
        --color-limited: #EA8600;
        --color-newly: #1A73E8;
        --color-widely: #1E8E3E;
        --color-no_data: #C6C6C6;
        --color-outline: #D9D9D9;
        --color-text: #000;
        --color-link: #1A73E8;

        color: var(--color-text);
        display: block;
        border: solid 1px var(--color-outline);
        border-radius: 8px;
        padding: 17px 21px;
        max-width: 800px;
        font-family: Roboto, sans-serif;
        font-size: 14px;
        font-style: normal;
      }

      @media (prefers-color-scheme: dark) {
        :host {
          --color-limited: #F09409;
          --color-newly: #1B6EF3;
          --color-widely: #1EA446;
          --color-no_data: #C6C6C6;

          --color-outline: #D9D9D9;
          --color-text: #fff;
          --color-background: #121212;
          --color-link: #5aa1ff;
        }
      }

      h1 {
        font-weight: normal;
        font-size: 20px;
      }

      a,
      a:active,
      a:visited {
        color: var(--color-link);
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

      .baseline-status-title div:first-child{
        display: flex;
        align-items: center;
        gap: .2rem;
      }

      .baseline-badge {
        background: var(--color-newly);
        color: #fff;
        font-size: 11px;
        padding: 0 4px;
        border-radius: 2px;
        text-transform: uppercase;
        line-height: 20px;
        margin-inline: .5rem;
      }

      browser-support-icon {
        margin-left: -5px;
      }

      browser-support-icon.support-no_data svg:first-child,
      browser-support-icon.support-limited svg:first-child {
        display: none;
      }

      browser-support-icon.support-newly svg:last-child,
      browser-support-icon.support-widely svg:last-child {
        display: none;
      }

      .support-no_data {
        color: var(--color-no_data);
      }

      .support-limited {
        color: var(--color-limited);
      }

      .support-newly{
        color: var(--color-newly);
      }

      .support-widely {
        color: var(--color-widely);
      }

      details > summary .open-icon {
        width: 21px;
        height: 21px;
        margin-left: auto;
        color: var(--text-color);
      }

      details > summary .open-icon svg {
        transition: all 0.3s;
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
        gap: 1rem;
        justify-content: space-between;
        padding: 1rem 0;
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
      featureId: {type: String},
    };
  }

  fetchData = new Task(this, {
    task: async ([featureId], {signal}) => {
      const url = API_ENDPOINT + this.featureId;
      const response = await fetch(url, {signal, cache: "force-cache"});
      if (!response.ok) { throw new Error(response.status); }
      return response.json();
    },
    args: () => ['_']
  });

  renderSupportIcon(baseline, support) {
    support = support ? 'widely' : 'limited';
    support = (baseline === 'newly' || baseline === 'no_data') ? baseline : support;

    return html`<browser-support-icon class="support-${support}">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" fill="none" viewBox="0 0 17 21"><path fill="currentColor" d="M1.253 3.31a8.843 8.843 0 0 1 5.47-1.882c4.882 0 8.838 3.927 8.838 8.772 0 4.845-3.956 8.772-8.837 8.772a8.842 8.842 0 0 1-5.47-1.882c-.237.335-.49.657-.758.966a10.074 10.074 0 0 0 6.228 2.14c5.562 0 10.07-4.475 10.07-9.996 0-5.52-4.508-9.996-10.07-9.996-2.352 0-4.514.8-6.228 2.14.268.309.521.631.757.966Z"/><path fill="currentColor" d="M11.348 8.125 6.34 13.056l-3.006-2.954 1.002-.985 1.999 1.965 4.012-3.942 1.002.985Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" fill="none" viewBox="0 0 17 21"><path fill="currentColor" d="M1.254 3.31a8.843 8.843 0 0 1 5.47-1.882c4.881 0 8.838 3.927 8.838 8.772 0 4.845-3.957 8.772-8.838 8.772a8.842 8.842 0 0 1-5.47-1.882c-.236.335-.49.657-.757.966a10.074 10.074 0 0 0 6.227 2.14c5.562 0 10.071-4.475 10.071-9.996 0-5.52-4.509-9.996-10.07-9.996-2.352 0-4.515.8-6.228 2.14.268.309.52.631.757.966Z"/><path fill="currentColor" d="m10.321 8.126-1.987 1.972 1.987 1.972-.993.986-1.987-1.972-1.987 1.972-.993-.986 1.986-1.972-1.986-1.972.993-.986 1.987 1.972L9.328 7.14l.993.986Z"/></svg>
      </browser-support-icon>`;
  }

  renderTemplate(feature, isLoading) {
    const baseline = feature.baseline.status;
    let prefix = '';
    let year = '';
    let badge = '';

    if (baseline === 'newly') {
      prefix = 'This ';
      badge = html`<span class="baseline-badge">newly available</span>`
      if (feature.baseline.newly_date) {
        const date = new Intl.DateTimeFormat('en-GB', {
          year: 'numeric',
          month: 'long'
        }).format(new Date(feature.baseline.newly_date));
        prefix = `Since ${date} t`;
        year = date.split(' ')[1];
      }
    }

    const title = isLoading ? 'Loading...' : BASELINE_DEFS[baseline].title;

    return html`
      <h1>${feature.name}</h1>
      <details>
      <summary>
        <baseline-icon support="${baseline}"></baseline-icon>
        <div class="baseline-status-title">
          <div><strong>Baseline:</strong> ${title} ${year} ${badge}</div>
          <div>
            ${ICONS['chrome']}
            ${this.renderSupportIcon(baseline, feature.browser_implementations?.chrome)}
            ${ICONS['edge']}
            ${this.renderSupportIcon(baseline, feature.browser_implementations?.edge)}
            ${ICONS['firefox']}
            ${this.renderSupportIcon(baseline, feature.browser_implementations?.firefox)}
            ${ICONS['safari']}
            ${this.renderSupportIcon(baseline, feature.browser_implementations?.safari)}
          </div>
        </div>

        <span class="open-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
            <path d="M5.5 6.45356L0.25 1.20356L1.19063 0.262939L5.5 4.59419L9.80937 0.284814L10.75 1.22544L5.5 6.45356Z" fill="currentColor"/>
          </svg>
        </span>
      </summary>
      <p>
        ${prefix}${BASELINE_DEFS[baseline].description}
      </p>
      <p>
        <a href="https://github.com/web-platform-dx/web-features/blob/main/features/${feature.id}.yml">Learn more</a>
        ${feature?.caniuse ?
          html`<a href="https://caniuse.com/${feature.caniuse}">See full compatibility</a>` :
          ''}
      </p>
    </details>`;
  }

  render() {
    const missingFeature = {
      baseline: {
        status: 'no_data',
      },
      id: this.featureId || 'Unknown feature',
      name: this.featureId || 'Unknown feature'
    };
    if (!this.featureId) {
      return this.renderTemplate(missingFeature);
    }
    return this.fetchData.render({
      pending: () => this.renderTemplate(missingFeature, true),
      complete: (feature) => {
        if (!feature) {
          return this.renderTemplate(missingFeature);
        }
        return this.renderTemplate(feature);
      },
      error: () => this.renderTemplate(missingFeature),
    });
  }
}

window.customElements.define('baseline-status', BaselineStatus);
