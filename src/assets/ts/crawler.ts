import FileSaver from "file-saver";
import {createElement} from "./lib";


export function makeView(image:HTMLImageElement) : Node {
    let item, img, i = 1;

    item = createElement('div', {});
    if (image.src.length > 0){
        i +=1
        item.setAttribute('id',i.toString());
        img = document.createElement('img');

        img.setAttribute('alt', i.toString() + '#img')
        img.setAttribute('src', image.src)
        img.setAttribute('width', '140')
        img.setAttribute('height', '150')
        img.addEventListener('click',function (event) {
            event.preventDefault();
            FileSaver.saveAs(this.src);
        })

        //div.appendChild(icon)
        item.appendChild(img)
    }

    return item;
}