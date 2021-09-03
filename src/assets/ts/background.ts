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

//capture event on click context menu
browser.contextMenus.onClicked.addListener(sendCaptureImagesRequest);
//capture event on click action button
browser.browserAction.onClicked.addListener(sendCaptureImagesRequest);

function sendCaptureImagesRequest() {
    browser.tabs.query({active: true, currentWindow: true}).then(function(tabs:any) {
        console.log(tabs);
        browser.tabs.sendMessage(tabs[0].id, {session: 'makePopUp'}).then(r => console.log(r));
    });
}



