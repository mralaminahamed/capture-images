/*
* Capture Images
* Developer: Al-Amin Ahamed
* Website: https://www.mishusoft.com
* Official Link: https://github.com/mralaminahamed/capture-images
* */
//External dependencies
import {runtime, storage, contextMenus, browserAction, tabs} from "webextension-polyfill";



//working functions
export function createCaptureImageContextMenu() {
    //console.log(window.location)
    contextMenus.create({
        "id": "captureImagesContextMenu",
        "title": "Capture Images",
        "contexts": ["page"]
    });
}

export function sendCaptureImagesRequest(e:any) {
    console.log(e)
    tabs.query({active: true, currentWindow: true}).then(function(tabs:any) {
        //console.log(tabs);
        tabs.sendMessage(tabs[0].id, {
            session: 'makePopUp',
            logo: runtime.getURL('assets/images/image.svg'),
            title: runtime.getManifest().name,
        });
    });
}



//upgrade add-on on available
export function handleUpdateAvailable(details:any) {
    console.log(details);
    //console.log(details.version);
    // Proceed to upgrade the add-on
    runtime.reload();
}





//action

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

