/**
 * @author Fuad Hasan
 * Builds a document fragment from a JSON object representing HTML.
 */
export function json2html(object) {
    if (!(object instanceof Object)) {
        throw new Error('Parameter must be an object');
    }
    const fragment = document.createDocumentFragment();
    for (const [key, value] of Object.entries(object)) {
        if (typeof key === 'string') {
            if (key === 'tag') {
                fragment.appendChild(document.createElement(value));
            }
            else if (key === 'text') {
                if (fragment.lastElementChild) {
                    fragment.lastElementChild.appendChild(document.createTextNode(value));
                }
                else {
                    fragment.appendChild(document.createTextNode(value));
                }
            }
            else if (key === 'attr') {
                const element = fragment.lastElementChild;
                for (const [attrName, attrValue] of Object.entries(value)) {
                    element.setAttribute(attrName, attrValue);
                }
            }
            else if (key === 'childs') {
                if (Array.isArray(value)) {
                    for (const childObj of value) {
                        const childFragment = json2html(childObj);
                        if (!fragment.lastElementChild) {
                            throw new Error('No last element child');
                        }
                        fragment.lastElementChild.appendChild(childFragment);
                    }
                }
                else {
                    throw new Error('Childs must be an array');
                }
            }
            else if (key === 'child') {
                if (value instanceof Object) {
                    const childFragment = json2html(value);
                    if (!fragment.lastElementChild) {
                        throw new Error('No last element child');
                    }
                    fragment.lastElementChild.appendChild(childFragment);
                }
                else {
                    throw new Error('Child must be an object');
                }
            }
            else if (key === 'Node') {
                if (value instanceof DocumentFragment || value instanceof Element || value instanceof Text) {
                    fragment.appendChild(value);
                }
                else {
                    throw new Error('Node must be a DocumentFragment, Element, or Text');
                }
            }
        }
        else {
            throw new Error('Object key must be a string');
        }
    }
    return fragment;
}
