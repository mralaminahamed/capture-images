/*
* Capture Images
* Developer: Mr Abir Ahamed
* Website: https://www.mishusoft.com
* Official Link: https://download.mishusoft.com/addons/captureimages
* */

'use strict';

import {browser} from "webextension-polyfill-ts";
import {
    captureElementByClassName,
    captureElementById,
    createElement
} from "./lib";
import {app} from "./db";
/*@ts-ignore*/
let images :any = [];

browser.runtime.onMessage.addListener(
    (request, sender):any => {
        addAppWindow();
        if (request.greeting === "hello") {
            captureElementById('app-window').style.display = 'block';
            if (document.querySelectorAll('img').length !==0){
                document.querySelectorAll('img').forEach(function (img) {
                    console.log(img);
                });
            }
            alert(request);

                /*let capture_images_app:any = document.getElementById('captured-images-viewer');
              /*if (capture_images_app.style.display !== 'block'){
                    capture_images_app.style = 'display:block';
                    document.getElementById('viewer-close')?.addEventListener('click', function () {
                        capture_images_app.style = 'display:none';
                    });

                    let coll_img:any = '';
                    let images_div:any = document.getElementById('images-div');
                    let achor:any = document.getElementsByTagName('a');
                    for (let i = 0; i < achor.length; i++) {
                        let ext_exists_point = achor[i].href.search('.jpg' || '.jpeg' || '.png' || '.gif');
                        let coll_ext_text = achor[i].href.substr(ext_exists_point, (achor[i].href.length - ext_exists_point));
                        if (ext_exists_point !== -1 && coll_ext_text === '.jpg' || coll_ext_text === '.jpeg' || coll_ext_text === '.png' || coll_ext_text === '.gif') {
                            //img_count += i;
                            coll_img = document.createElement('img');
                            coll_img.setAttribute('src', achor[i].href);
                            coll_img.setAttribute('id', 'coll_images');
                            coll_img.setAttribute('class', 'coll-image');
                            coll_img.setAttribute('alt', 'Photo');
                            coll_img.setAttribute('title', 'Click to download');
                            images_div.appendChild(coll_img);
                        }
                    }
                    if (coll_img === ''){
                        images_div.textContent = 'No image found..';
                    }

                } else {
                    alert('Please reload this page');
                    window.location.reload();
                }*/

            (function () {
                let coll = document.getElementsByClassName("coll-image");
                let i;
                for (i = 0; i < coll.length; i++) {
                    coll[i].addEventListener("click", function () {
                        //console.log(this);
                        const a = document.createElement("a");
                        a.style.display = "none";
                        document.body.appendChild(a);
                        a.setAttribute("download", '');
                        a.href = this.src;
                        a.click();
                        document.body.removeChild(a);
                    });
                }
            }());
            return Promise.resolve('downloaded');
        }
    }
);

/*@ts-ignore*/
function addAppWindow(): any {
    let appWindow: any = createElement([{
        'div': {
            'id': 'app-window',
            'class': 'app-window',
            'style': 'display:none;'
        }
    }]);
    let appBody: any = createElement([{
        'div': {
            'id': 'app-window-body',
            'class': 'row app-window-body animate'
        }
    }]);
    appWindow.appendChild(appBody);

    let appTitleBar: any = createElement([{'div': {'class': 'appTitleBar'}}]);
    let appTitleText: any = createElement([{'div': {'class': 'appTitleText'}}]);
    appTitleText.textContent = app.about.name_spaced;
    appTitleBar.appendChild(appTitleText);
    let appSearchBox:any = createElement([{'input' : {'id':'image-search-box', 'class':'app-search-box', 'type':'search', 'placeholder':'Search any images'}}]);
    appTitleBar.appendChild(appSearchBox);

    let appTitleSymbol: any = createElement([{'div': {'id': 'app-close-button', 'class': 'appTitleSymbol'}}]);
    appTitleSymbol.textContent = 'x';
    appTitleBar.appendChild(appTitleSymbol);
    appBody.appendChild(appTitleBar);


    /*navigators content*/
    if (captureElementById('app-window') === null || captureElementById('app-window') === undefined) {
        /*console.info('setting window added')*/
        document.body.insertBefore(appWindow, document.body.lastElementChild);
    }

    return globalEventControllers('app-setting-window');
}

async function globalEventControllers(component: string) {
    if (component == 'app-setting-window') {
        /*console.log('set event for app-setting-button action');*/


        /*console.log('set event for app-setting-opener action');
        console.log(document.querySelector('#app-setting-button'));*/
        captureElementById('app-setting-button')?.addEventListener('click', function () {
            /*console.info('preparing to send data request');*/
            /*console.info('send data request');*/
        });


        /*console.log('set event for app-close-button action');
        console.log(captureElementById('-app-close-button'));*/
        captureElementById('app-close-button').addEventListener('click', function () {
            captureElementById('app-window').style.display = 'none';
        });

        /*console.log('set event for setting-get-a-licence action');
        console.log(captureElementById('setting-get-a-licence'));*/

        /*console.log('set event for nav action');*/
        /*console.log(captureElementByClassName('acsAppNavUL'));*/
        captureElementByClassName('appNavUL').childNodes.forEach(function (element: HTMLElement) {
            const content = (element.id).substr(((element.id).indexOf('nav-') + "nav-".length), (element.id).length);
            element.addEventListener('click', function () {
                /*const parentNavigatorId = element.id;
                console.log(element.id)
                console.log(content)*/
                if (content) {
                    captureElementByClassName('setting-app-body-content').childNodes.forEach(function (element: HTMLElement) {
                        /*console.log(element)*/
                        if (element.id !== 'setting-app-content-' + content) {
                            /*captureElementById(parentNavigatorId).removeAttribute('style');*/
                            element.style.display = 'none';
                            /*console.log(element)
                            console.log(captureElementById(parentNavigatorId))*/
                        } else {
                            if (element.style.display === 'none') {
                                element.style.display = 'block';
                                /*captureElementById(parentNavigatorId).setAttribute('style','background-color: #9932CC;cursor: pointer;');
                                console.log(element)
                                console.log(captureElementById(parentNavigatorId))*/
                            }
                        }
                    });
                }
            })
        });

        /*console.log(captureElementById('app-setting-window'));*/
        /*console.log('completed');*/
    }
}


/*@ts-ignore*/
function assembleUI() {
    /* attach external css file*/
    /*let app_css_file = document.createElement('link');
    app_css_file.setAttribute('type','text/css');
    app_css_file.setAttribute('rel','stylesheet');
    app_css_file.setAttribute('href',browser.runtime.getURL('assets/css/app.css'));
    document.getElementsByTagName('head')[0].appendChild(app_css_file);*/

    let app_image_window = document.createElement('div');
    app_image_window.setAttribute('id', 'captured-images-viewer');
    app_image_window.setAttribute('class', 'modal');

    let app_image_modal_content = document.createElement('div');
    app_image_modal_content.setAttribute('class', 'modal-content');

    let app_image_modal_header = document.createElement('div');
    app_image_modal_header.setAttribute('class', 'modal-header');

    let app_image_modal_header_span = document.createElement('span');
    app_image_modal_header_span.setAttribute('id', 'viewer-close');
    app_image_modal_header_span.setAttribute('class', 'close');
    app_image_modal_header_span.textContent = 'x';
    app_image_modal_header.appendChild(app_image_modal_header_span);

    let app_image_modal_header_h2 =  document.createElement('h2');
    app_image_modal_header_h2.textContent = 'Capture Images';
    app_image_modal_header.appendChild(app_image_modal_header_h2);
    app_image_modal_content.appendChild(app_image_modal_header);

    let app_image_modal_body = document.createElement('div');
    app_image_modal_body.setAttribute('class', 'modal-body');

    let app_image_modal_body_p = document.createElement('p');
    app_image_modal_body.appendChild(app_image_modal_body_p);

    let app_image_modal_body_div = document.createElement('div');
    app_image_modal_body_div.setAttribute('id', 'images-div');
    app_image_modal_body.appendChild(app_image_modal_body_div);
    app_image_modal_content.appendChild(app_image_modal_body);
    app_image_window.appendChild(app_image_modal_content);
    document.body.appendChild(app_image_window);
}