/*
* Capture Images
* Developer: Al-Amin Ahamed
* Website: https://www.mishusoft.com
* Official Link: https://github.com/mralaminahamed/capture-images
* */


'use strict';
import {browser} from "webextension-polyfill-ts";

/*this extension main content*/
browser.runtime.onInstalled.addListener(function() {
    browser.contextMenus.create({
        "id": "captureImagesContextMenu",
        "title": "Capture Images",
        "contexts": ["page"]
    });
});

browser.contextMenus.onClicked.addListener(sendCaptureImagesRequest);

browser.browserAction.onClicked.addListener(sendCaptureImagesRequest);

function sendCaptureImagesRequest() {
    browser.tabs.query({active: true, currentWindow: true}).then(function(tabs:any) {
        console.log(tabs);
        browser.tabs.sendMessage(tabs[0].id, {greeting: 'hello'}).then(r => console.log(r));
    });
}



