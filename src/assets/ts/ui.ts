//Internal dependencies
import {
    captureElement,
    createElement
} from "./lib";

if (captureElement('body')){
    if (captureElement('#ci-window') === undefined){

        //application window
        let app = createElement('article', {
            'id': 'ci-window', 'class': 'ci-window', 'style': 'display:none;'
        });
        captureElement('body').appendChild(app);

        //application window
        let section = createElement('section', {
            'id': 'ci-body',
            'class': 'row ci-window-body animate'
        });
        app.appendChild(section);

        //sections of application
        //header section
        let header = createElement('header', {
            'id': 'ci-header',
        });
        section.appendChild(header);

        //application's logo
        let app_logo = createElement('img', {
            'id': 'ci-logo',
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
        header.appendChild(app_close);

        console.log(captureElement('body'))
    }
}