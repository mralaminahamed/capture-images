/*
* Capture Images
* Developer: Al-Amin Ahamed
* Website: https://www.mishusoft.com
* Official Link: https://github.com/mralaminahamed/capture-images
* */
//External dependencies
import {runtime, storage, contextMenus, browserAction} from "webextension-polyfill";
//Internal dependencies
import {createCaptureImageContextMenu, handleUpdateAvailable, sendCaptureImagesRequest} from "./lib.background";


/*add context menu*/
runtime.onInstalled.addListener(createCaptureImageContextMenu);

//storage change event
storage.onChanged.addListener(() => {});

//capture event on click context menu
contextMenus.onClicked.addListener(sendCaptureImagesRequest);
//capture event on click action button
browserAction.onClicked.addListener(sendCaptureImagesRequest);

//make update
runtime.onUpdateAvailable.addListener(handleUpdateAvailable);




