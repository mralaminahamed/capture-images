/*
* Capture Images
* Developer: Al-Amin Ahamed
* Website: https://www.mishusoft.com
* Official Link: https://github.com/mralaminahamed/capture-images
* */


export const today = new Date();

export const app = {
    "about": {
        "name": "CaptureImages",
        "guid": "addon.firefox@developer.mishuoft.com",
        "short_name": "CaptureImages",
        "name_spaced": "Capture Images",
        "total_users": "380",
        "version": "1.0.0",
    },
    "website": {
        "home": "https://www.mishusoft.com/",
        "IpInfoTEST": "https://api.ipdata.co/?api-key=test",
        "IpInfo": "https://api.ipdata.co/?api-key=2f9dde381f67efed325acfb1011a988036b28fc6cc02f07668ef7180",
        "temporary": {
            "home": "http://localhost/",
            "monitorURL": "http://localhost/monitor/browser/",
        },
        "publish": {
            "home": "https://www.mishusoft.com/",
            "monitorURL": "https://www.mishusoft.com/monitor/browser/",
        }
    },
    "baseURI": document.URL,
    "document": document,
    "domain": {
        "name": document.domain,
    }
}