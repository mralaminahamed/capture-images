//Internal dependencies
import {
    captureElement,
    createElement
} from "./lib";

export class UI {
    static make(){
        if (captureElement('body')){
            if (captureElement('#ci') === undefined){
                let ciApp = createElement('div', {
                    'id': 'ci', 'class': 'ci-window', 'style': 'display:none !important;'
                })

                //application window
                let window = createElement('article', {
                    'id': 'ci-window', /*'class': 'ci-window-body'*/
                });
                ciApp.appendChild(window);

                //sections of application
                //header section
                let header = createElement('header', {
                    'id': 'ci-header',/*'class': 'ci-header',*/
                });
                window.appendChild(header);

                //application's logo
                let app_logo = createElement('img', {
                    'id': 'ci-logo',/*'class': 'ci-logo','src': browser.runtime.getURL('assets/images/image.svg'),
            'width': '40','height': '40','alt': 'logo',*/
                });
                header.appendChild(app_logo);

                //application's title
                let app_title = createElement('h1', {
                    'id': 'ci-title',
                });
                header.appendChild(app_title);

                //application's logo
                let app_close = createElement('div', {
                    'id': 'ci-close',
                });
                app_close.addEventListener('click',function (event) {
                    event.preventDefault();
                    ciApp.remove();
                })
                header.appendChild(app_close);

                //application images body
                let section = createElement('section', {
                    'id': 'ci-container',
                    /*'class': 'ci-container'*/
                });
                window.appendChild(section);

                //application window
                let footer = createElement('footer', {
                    'id': 'ci-footer',
                    /*'class': 'ci-footer'*/
                });
                window.appendChild(footer);

                ciApp.addEventListener('contextmenu', function (e) {
                    e.preventDefault();
                   alert('Current section is protected by CI');
                });
                captureElement('body').appendChild(ciApp);

            }
        }
    }
}