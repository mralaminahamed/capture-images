/*
* Capture Images
* Developer: Al-Amin Ahamed
* Website: https://www.mishusoft.com
* Official Link: https://github.com/mralaminahamed/capture-images
* */

export function createElement(name: string, attributes: any) {
    let element = document.createElement(name);
    return assignAttributes(element, attributes);
}

export function assignAttributes(element: HTMLElement, attributes: any) {
    if (attributes.length !== 0) {
        for (let attr in attributes) {
            if (attr === 'text') {
                element.innerText = attributes[attr]
            } /*else if (attr === 'html') {
                element.innerHTML = attributes[attr]
            }*/ else if (attr === 'child') {
                if (attributes[attr].length !== 0){
                    //createElement('div', {attr:v, attr:v, child:['div':[{'att':1}]]})
                    for (let child in attributes[attr]){
                        if (typeof attributes[attr][child] === 'object'){
                            for (let childItem in attributes[attr][child]){
                                createElement(childItem, attributes[attr][child][childItem])
                            }
                        }
                        if (typeof attributes[attr][child] === 'string'){
                            createElement(child, attributes[attr][child])
                        }
                    }
                }
            } else {
                element.setAttribute(attr, attributes[attr]);
            }
        }
    }

    return element;
}

export function captureElement(selectors: string): any {
    if (document.querySelector(selectors) !== null) {
        return document.querySelector(selectors) as HTMLElement;
    }
}

/*required functions*/
