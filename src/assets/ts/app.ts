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
import {crawlImages} from "./crawler";


UI.make();

//crawling images
let imageNodeList: any[] = crawlImages();

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
                assignAttributes(captureElement('#ci-logo'), {src:request.logo, class:'ci-logo', alt:'capture image official logo',width:40, height:40, loading:'lazy'});
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