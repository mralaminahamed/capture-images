/*
* Capture Images
* Developer: Al-Amin Ahamed
* Website: https://www.mishusoft.com
* Official Link: https://github.com/mralaminahamed/capture-images
* */


import {browser} from "webextension-polyfill-ts";
import {
    assignAttributes,
    captureElement
} from "./lib";
import {UI} from "./ui";
//let images :any = [];

// browser.runtime.onMessage.addListener(request => {
//     console.log("Message from the background script:");
//     console.log(request);
//     return Promise.resolve({response: "Hi from content script"});
// });


UI.make();


browser.runtime.onMessage.addListener(
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

                //crawling images
                let images = document.images;
                let imageNodeList = [];
                let item, img;
                if(images.length > 0){
                    for (let i = 0; i < images.length; i++) {
                        // const image_width_actual = images[i].naturalWidth;
                        // const image_height_actual = images[i].naturalHeight;
                        //
                        // const image_width_rendered = images[i].width;
                        // const image_height_rendered = images[i].height;

                        item = document.createElement('a')
                        img = document.createElement('img');

                        item.setAttribute('href', images[i].src)
                        item.setAttribute('download', 'download')
                        item.addEventListener('click', function (e) {
                            e.preventDefault();
                            download(this.href);
                        });

                        img.setAttribute('alt', i.toString() + '#img')
                        img.setAttribute('src', images[i].src)
                        img.setAttribute('width', '150')
                        img.setAttribute('height', '150')

                        //div.appendChild(icon)
                        item.appendChild(img)

                        imageNodeList[i] = item;
                    }

                    for (let j = 0; j < imageNodeList.length; j++) {
                        document.querySelector('#ci-container')?.appendChild(imageNodeList[j])
                    }
                }
                //alert(request);

              //   let capture_images_app:any = document.getElementById('captured-images-viewer');
              // if (capture_images_app.style.display !== 'block'){
              //       capture_images_app.style = 'display:block';
              //       document.getElementById('viewer-close')?.addEventListener('click', function () {
              //           capture_images_app.style = 'display:none';
              //       });
              //
              //       let coll_img:any = '';
              //       let images_div:any = document.getElementById('images-div');
              //       let achor:any = document.getElementsByTagName('a');
              //       for (let i = 0; i < achor.length; i++) {
              //           let ext_exists_point = achor[i].href.search('.jpg' || '.jpeg' || '.png' || '.gif');
              //           let coll_ext_text = achor[i].href.substr(ext_exists_point, (achor[i].href.length - ext_exists_point));
              //           if (ext_exists_point !== -1 && coll_ext_text === '.jpg' || coll_ext_text === '.jpeg' || coll_ext_text === '.png' || coll_ext_text === '.gif') {
              //               //img_count += i;
              //               coll_img = document.createElement('img');
              //               coll_img.setAttribute('src', achor[i].href);
              //               coll_img.setAttribute('id', 'coll_images');
              //               coll_img.setAttribute('class', 'coll-image');
              //               coll_img.setAttribute('alt', 'Photo');
              //               coll_img.setAttribute('title', 'Click to download');
              //               images_div.appendChild(coll_img);
              //           }
              //       }
              //       if (coll_img === ''){
              //           images_div.textContent = 'No image found..';
              //       }
              //
              //   } else {
              //       alert('Please reload this page');
              //       window.location.reload();
              //   }

                // (function () {
                //     let coll = document.getElementsByClassName("coll-image");
                //     let i;
                //     for (i = 0; i < coll.length; i++) {
                //         coll[i].addEventListener("click", function () {
                //             //console.log(this);
                //             const a = document.createElement("a");
                //             a.style.display = "none";
                //             document.body.appendChild(a);
                //             a.setAttribute("download", '');
                //             a.href = this.src;
                //             a.click();
                //             document.body.removeChild(a);
                //         });
                //     }
                // }());
                return Promise.resolve('downloaded');
            } else {
                alert('Please  until page load complete.')
            }
        }
    }
);

function download(url: any) {
    fetch(url)
        .then(res => res.blob()) // Gets the response and returns it as a blob
        .then(blob => {
            // Here's where you get access to the blob
            // And you can use it for whatever you want
            // Like calling ref().put(blob)

            // Here, I use it to make an image appear on the page
            let objectURL = URL.createObjectURL(blob);
            let myImage = new Image();
            myImage.src = objectURL;
            myImage.alt = 'download';
            myImage.style.display = 'none';
            myImage.setAttribute('download', 'download');
            document.body.appendChild(myImage)
            myImage.click();
            myImage.remove();
        });
}
