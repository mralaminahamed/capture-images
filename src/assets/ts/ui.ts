//Internal dependencies
import {
    captureElement,
    createElement
} from "./lib";


if (captureElement('body')){
    if (captureElement('#app-window-body') === undefined){

        //application window
        let app = createElement('article', {
            'id': 'app-window-body',
            'class': 'row app-window-body animate'
        });
        captureElement('body').appendChild(app);

        //sections of application
        //header section
        let header = createElement('header', {
            'id': 'app-header',
        });
        app.appendChild(header);

        //application's logo
        let app_logo = createElement('img', {
            'id': 'app-logo',
        });
        header.appendChild(app_logo);

        //application's title
        let app_title = createElement('p', {
            'id': 'app-title',
        });
        header.appendChild(app_title);

        //application's logo
        let app_close = createElement('div', {
            'id': 'app-close',
        });
        header.appendChild(app_close);


        console.log(captureElement('body'))
    }
}