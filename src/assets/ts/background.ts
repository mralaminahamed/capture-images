/*
* Capture Images
* Developer: Al-Amin Ahamed
* Website: https://www.mishusoft.com
* Official Link: https://github.com/mralaminahamed/capture-images
* */
//External dependencies
import {browser} from "webextension-polyfill-ts";
//Internal dependencies
import {createCaptureImageContextMenu, handleUpdateAvailable, sendCaptureImagesRequest} from "./lib.background";


/*add context menu*/
browser.runtime.onInstalled.addListener(createCaptureImageContextMenu);

//
browser.storage.onChanged.addListener(() => {});

//capture event on click context menu
browser.contextMenus.onClicked.addListener(sendCaptureImagesRequest);
//capture event on click action button
browser.browserAction.onClicked.addListener(sendCaptureImagesRequest);

//make update
browser.runtime.onUpdateAvailable.addListener(handleUpdateAvailable);




