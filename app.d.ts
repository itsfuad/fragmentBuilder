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
export declare function fragmentBuilder(object: ObjType): DocumentFragment;
export {};
