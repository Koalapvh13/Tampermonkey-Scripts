// ==UserScript==
// @name         DevTo AutoLike
//@homepageURL https://github.com/Koalapvh13/Tampermonkey-Scripts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script to automatically like Dev.to Posts Opened in Browser
// @license MIT
//@icon https://lh3.googleusercontent.com/zw07Qyfb7MnF8J9pZJ6eYheztKq1shP1j6tUqyDYZj6R60nNrrPrFZvC9k5JIe2m9t2GfQLbXg=w128-h128-e365-rj-sc0x00ffffff
// @author       Matheus Dias Vieira
//@copyright 2020, Matheus Dias Vieira (https://github.com/Koalapvh13)
// @match        http*://*.dev.to/*
// @run-at       document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const like = (node) => {
        const interval = setInterval(() => {
            const btnlike = document.querySelector("#reaction-butt-like")
            const btnunicorn = document.querySelector("#reaction-butt-unicorn")
            if (btnlike && btnunicorn) {
                clearInterval(interval)
                if (!btnlike.classList.contains("user-activated")) {
                    btnlike.click()
                }
                if (!btnunicorn.classList.contains("user-activated")) {
                    btnunicorn.click()
                }
            }

        }, 1000)
    }
    try {
        waitForKeyElements("#reaction-butt-like", like);
    } catch (e) {
        console.log("")
    }

})();