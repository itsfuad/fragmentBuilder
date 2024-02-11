interface ObjType {
    tag: string;
    text?: string;
    attr?: object;
    childs?: ObjType[];
    child?: ObjType;
    Node?: Node;
}

/**
 * @param {ObjType} object
 * @throws {Error} - If the parameter is not an object.
 * @throws {Error} - If the object key is not a string.
 * @throws {Error} - If the childs key is not an array.
 * @throws {Error} - If the child key is not an object.
 * @throws {Error} - If the Node key is not a DocumentFragment, Element, or Text.
 * @returns {DocumentFragment}
 */

export function fragmentBuilder(object: ObjType): DocumentFragment {
	if (!(object instanceof Object)) {
		throw new Error('Parameter must be an object');
	}

	const fragment = document.createDocumentFragment();

	for (const [key, value] of Object.entries(object)) {

		if (typeof key === 'string') {
			if (key === 'tag') {
				fragment.appendChild(document.createElement(value as string));
			} else if (key === 'text') {
				if (fragment.lastElementChild) {
					fragment.lastElementChild.appendChild(document.createTextNode(value as string));
				} else {
					fragment.appendChild(document.createTextNode(value as string));
				}
			} else if (key === 'attr') {
				const element = fragment.lastElementChild as HTMLElement;
				for (const [attrName, attrValue] of Object.entries(value as object)) {
					element.setAttribute(attrName, attrValue);
				}
			} else if (key === 'childs') {
				if (Array.isArray(value)) {
					for (const childObj of value) {
						const childFragment = fragmentBuilder(childObj);
                        if (!fragment.lastElementChild) {
                            throw new Error('No last element child');
                        }
						fragment.lastElementChild.appendChild(childFragment);
					}
				} else {
					throw new Error('Childs must be an array');
				}
			}else if(key === 'child'){
				if (value instanceof Object) {
					const childFragment = fragmentBuilder(value as ObjType);
                    if (!fragment.lastElementChild) {
                        throw new Error('No last element child');
                    }
					fragment.lastElementChild.appendChild(childFragment);
				} else {
					throw new Error('Child must be an object');
				}
			}
			else if (key === 'Node') {
				if (value instanceof DocumentFragment || value instanceof Element || value instanceof Text) {
					fragment.appendChild(value);
				} else {
					throw new Error('Node must be a DocumentFragment, Element, or Text');
				}
			}
		}else{
			throw new Error('Object key must be a string');
		}
	}

	return fragment;
}