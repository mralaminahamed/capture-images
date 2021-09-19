/*
* Capture Images
* Developer: Al-Amin Ahamed
* Website: https://www.mishusoft.com
* Official Link: https://github.com/mralaminahamed/capture-images
* */

//External dependencies
import {app, today} from "./db";

/*required variables*/
export const appTracker = app.about.short_name + '@' + app.about.version;
export let globalAppMonitorURL: string;
export let appdata_default: object;


/*initialize on extension installed*/
/*#!if ENV === 'production'*/
globalAppMonitorURL = 'https://www.mishusoft.com/monitor/browser/';
/*#!else*/
globalAppMonitorURL = 'http://localhost/monitor/browser/';
/*#!endif*/

/*required variables*/


export function IsJsonString(str: string) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export function createElement(name: string, attributes: any) {
    let element = document.createElement(name);
    return assignAttributes(element, attributes);
}

export function assignAttributes(element: HTMLElement, attributes: any) {
    if (attributes.length !== 0) {
        for (let attr in attributes) {
            if (attr === 'text') {
                element.innerText = attributes[attr]
            } /*else if (attr === 'html') {
                element.innerHTML = attributes[attr]
            }*/ else if (attr === 'child') {
                if (attributes[attr].length !== 0){
                    //createElement('div', {attr:v, attr:v, child:['div':[{'att':1}]]})
                    for (let child in attributes[attr]){
                        if (typeof attributes[attr][child] === 'object'){
                            for (let childItem in attributes[attr][child]){
                                createElement(childItem, attributes[attr][child][childItem])
                            }
                        }
                        if (typeof attributes[attr][child] === 'string'){
                            createElement(child, attributes[attr][child])
                        }
                    }
                }
            } else {
                element.setAttribute(attr, attributes[attr]);
            }
        }
    }

    return element;
}

export function captureElement(selectors: string): any {
    if (document.querySelector(selectors) !== null) {
        return document.querySelector(selectors) as HTMLElement;
    }
}


export function sendRequest(options: any, callback?: any) {
    let dataType: any;
    /*#!if debug===true*/
    console.group('XHR request');
    console.log(options);
    /*#!endif*/
    if (typeof options === "object") {
        /*#!if debug===true*/
        console.info('options is object');
        /*#!endif*/
        if (options.method !== null && options.url !== null) {
            /*#!if debug===true*/
            console.info('method and url found');
            /*#!endif*/
            let request = new XMLHttpRequest();
            /*#!if debug===true*/
            console.info('creating xhr request');
            /*#!endif*/
            request.open(options.method, options.url, options.async);
            /*#!if debug===true*/
            console.info('opening url with xhr request');
            console.info('setting xhr request header');
            /*#!endif*/
            if (options.header !== null && typeof options.header == "object") {
                for (let i = 0; i < options.header.length; i++) {
                    request.setRequestHeader(options.header[i].name, options.header[i].value);
                    if (options.header[i].value.indexOf('form') !== -1) {
                        dataType = 'formData';
                    }
                    if (options.header[i].value.indexOf('json') !== -1) {
                        dataType = 'jsonData';
                    }
                }
            }
            /*#!if debug===true*/
            else {
                console.error("Error: Invalid headers.");
            }
            /*#!endif*/

            if (options.data !== null && typeof options.data == "object") {
                if (dataType === 'jsonData') {
                    /*#!if debug===true*/
                    console.info(options.data);
                    /*#!endif*/
                    request.send(JSON.stringify(options.data));
                }
                if (dataType === 'formData') {
                    let formData: FormData = new FormData();
                    Object.keys(options.data).forEach(function (key) {
                        formData.append(key, options.data[key]);
                    });
                    /*#!if debug===true*/
                    console.info(options.data);
                    console.info(formData);
                    /*#!endif*/
                    request.send(formData);
                }
            } else {
                request.send();
            }
            /*#!if debug===true*/
            console.info('sending data with xhr request');
            /*#!endif*/
            request.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    /*#!if debug===true*/
                    console.info('getting data with xhr request');
                    console.log(this.responseText);
                    /*#!endif*/
                    if (IsJsonString(this.responseText)) {
                        let data = JSON.parse(this.responseText);
                        if (callback) {
                            callback(data)
                        }
                    }
                }
            }
        } else {
            console.error("Error: METHOD and URL empty.");
        }
    } else {
        console.error("Error: Invalid options.");
    }

    /*#!if debug===true*/
    console.groupEnd();
    /*#!endif*/
}

export function createDefaultAppData(browserNameFull: string, browserVersion: string, clientIP: string, clientCity: string, clientCountry: string, clientDeviceName: string, clientDevicePlatform: string, clientPlatformArchitecture: string) {
    return appdata_default = {
        "app": {"id": "", "name": app.about.name, "version": app.about.version},
        "browser": {"name": browserNameFull, "version": browserVersion},
        "client": {"ip": clientIP, "city": clientCity, "country": clientCountry},
        "device": {
            "name": clientDeviceName,
            "platform": clientDevicePlatform,
            "architecture": clientPlatformArchitecture
        },
        "install": {"date": today},
        /*new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])*/
    };
}

export function optimizeAppSettingObject(setting: { [p: string]: { [p: string]: any } }, options: ({ app: string[] } | { browser: string[] } | { client: string[] } | { device: string[] } | { licence: string[] } | { user: string[] })[], callbackFn?: any, fallbackFn?: any) {
    /*console.log(setting);
    console.log(options);
    console.log(Object.keys(setting));*/

    if (options.length !== 0) {
        options.forEach(function (item: any) {
            Object.keys(item).forEach(function (__opt_Key) {
                Object.keys(setting).forEach(function (__obj_Key) {
                    if (__opt_Key === __obj_Key) {
                        item[__opt_Key].forEach(function (__opt_sub_key: string | number) {
                            Object.keys(setting[__obj_Key]).forEach(function (__obj_sub_key) {
                                if (__opt_sub_key !== __obj_sub_key && __obj_sub_key === '') {
                                    /*console.log("__opt_sub_key undefined...");
                                    console.log(__opt_sub_key);*/
                                    if (fallbackFn) {
                                        return fallbackFn();
                                    }
                                } /*else {
                                    console.log("__obj_Key...");
                                    console.log(__obj_Key);
                                    console.log("setting[__objKey]...");
                                    console.log(setting[__obj_Key]);
                                    console.log("[__sub_key]...");
                                    console.log(__obj_sub_key);
                                    console.log("setting[__objKey][__sub_key]...");
                                    console.log(setting[__obj_Key][__obj_sub_key]);
                                }*/
                            });
                        })
                    }
                });
            });
        });

        if (callbackFn) {
            return callbackFn(setting);
        }
    }
}

/*required functions*/
