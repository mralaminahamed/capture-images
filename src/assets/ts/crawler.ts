import FileSaver from "file-saver";
import {createElement} from "./lib";

export function crawlImages() {
    //crawling images
    let images = document.images;
    let imageNodeList: any[] = [];
    let item, img;
    if(images.length > 0){
        for (let i = 0; i < images.length; i++) {
            if (images[i].src.length > 0){
                item = createElement('div', {id:i.toString()});
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

    return imageNodeList;
}