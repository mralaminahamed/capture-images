import {browser} from "webextension-polyfill-ts";

export function createCaptureImageContextMenu() {
    //console.log(window.location)
    browser.contextMenus.create({
        "id": "captureImagesContextMenu",
        "title": "Capture Images",
        "contexts": ["page"]
    });
}

export function sendCaptureImagesRequest(e:any) {
    console.log(e)
    browser.tabs.query({active: true, currentWindow: true}).then(function(tabs:any) {
        //console.log(tabs);
        browser.tabs.sendMessage(tabs[0].id, {
            session: 'makePopUp',
            logo: browser.runtime.getURL('assets/images/image.svg'),
            title: browser.runtime.getManifest().name,
        });
    });
}



//upgrade add-on on available
export function handleUpdateAvailable(details:any) {
    console.log(details);
    //console.log(details.version);
    // Proceed to upgrade the add-on
    browser.runtime.reload();
}