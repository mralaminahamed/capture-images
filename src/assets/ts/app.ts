/*
* Capture Images
* Developer: Al-Amin Ahamed
* Website: https://www.mishusoft.com
* Official Link: https://github.com/mralaminahamed/capture-images
* */


import {runtime} from "webextension-polyfill";
import {
    assignAttributes,
    captureElement
} from "./lib";
import {UI} from "./ui";
import FileSaver from "file-saver";


UI.make();


//crawling images
let images = document.images;
let imageNodeList: any[] = [];
let item, img;
if(images.length > 0){
    for (let i = 0; i < images.length; i++) {
        if (images[i].src.length > 0){
            item = document.createElement('div')
            img = document.createElement('img');

            img.setAttribute('alt', i.toString() + '#img')
            img.setAttribute('src', images[i].src)
            img.setAttribute('width', '140')
            img.setAttribute('height', '150')
            img.addEventListener('click',function (event) {
                event.preventDefault();
                FileSaver.saveAs(this.src);
            })

            //div.appendChild(icon)
            item.appendChild(img)
            imageNodeList[i] = item;
        }
    }
}


runtime.onMessage.addListener(
    (request, sender):any => {
        console.log(request)
        console.log(sender)
        if (request.session === "makePopUp") {
            if (document.readyState === 'complete'){
                if (captureElement('#ci') === undefined){
                    UI.make();
                }

                //Add ui components for application
                //Application body
                assignAttributes(captureElement('#ci-window'), {class:'ci-window-body'});

                //Header
                assignAttributes(captureElement('#ci-header'), {class:'ci-header'});
                assignAttributes(captureElement('#ci-logo'), {src:request.logo, class:'ci-logo', alt:'capture image official logo',width:40, height:40});
                assignAttributes(captureElement('#ci-title'), {text:request.title, class:'ci-title', title:'Capture Images'});
                assignAttributes(captureElement('#ci-close'), {text:'x', class:'ci-close', title:'Click to close'});

                //Container
                assignAttributes(captureElement('#ci-container'), {class:'ci-container'});
                //Footer
                assignAttributes(captureElement('#ci-footer'), {class:'ci-footer', text:(new Date()).getFullYear() + '@ CI Author'});



                //make display block
                captureElement('#ci').style.display = 'block';
                //captureElement('#ci').addEventListener('scrolled');
                document.querySelector('#ci')?.addEventListener('scroll', function (e) {
                    captureElement('#ci-window').style.top = '70px';
                })

                if(document.images.length > 0){
                    for (let j = 0; j < imageNodeList.length; j++) {
                        document.querySelector('#ci-container')?.appendChild(imageNodeList[j])
                    }
                }
                return Promise.resolve('downloaded');
            } else {
                alert('Please  until page load complete.')
            }
        }
    }
);