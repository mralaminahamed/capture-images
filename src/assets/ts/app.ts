/*
* Capture Images
* Developer: Al-Amin Ahamed
* Website: https://www.mishusoft.com
* Official Link: https://github.com/mralaminahamed/capture-images
* */


import {runtime} from "webextension-polyfill";
import {assignAttributes, captureElement, captureElementList, createElement} from "./lib";
import {UI} from "./ui";
import {makeView} from "./crawler";
import FileSaver from "file-saver";

//let imageNodeList: any[];

//create ui root fo ci application
let app = createElement('div', {
    'id': 'ci', 'class': 'ci-window', 'style': 'display:none !important;'
});
captureElement('body').appendChild(app);

UI.make();


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
                });


                // select all images from current webpage
                let imageNodeList: any[]  = captureElementList('img');

                console.log('make ui for download')
                console.log(imageNodeList)
                console.log(imageNodeList.length)

                let totalImages = new Set(imageNodeList);
                console.log(totalImages)
                console.log(totalImages.size)
                if( totalImages.size > 0){
                    totalImages.forEach(function (element) {

                        if (element.id !== 'ci-logo'){
                            //attach download icon for quick download
                            //create div element for icon
                            let buttonDiv = document.createElement('div');
                            buttonDiv.setAttribute('style',"display: flex;justify-content: flex-end;width: 100%;position: absolute;background-color: red;z-index: 1000;")

                            //create a element for icon setting
                            let quickDownloadButton = document.createElement('a')
                            quickDownloadButton.setAttribute('class','quick-download')
                            // quickDownloadButton.setAttribute('style',"z-index: 1000;")

                            quickDownloadButton.setAttribute('href',element.src)
                            quickDownloadButton.addEventListener('click',function (event) {
                                event.preventDefault();
                                FileSaver.saveAs(this.href);
                            })
                            quickDownloadButton.innerHTML = '⮋';
                            buttonDiv.appendChild(quickDownloadButton);
                            element.parentElement.insertBefore(buttonDiv, element);
                        }

                        //attach to ci container for batch download
                        let elementDOM = makeView(element);
                        document.querySelector('#ci-container')?.appendChild(elementDOM)
                    });
                }

                return Promise.resolve('downloaded');
            } else {
                alert('Please until page load complete.')
            }
        }
    }
);