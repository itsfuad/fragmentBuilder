/**
 * @author Fuad Hasan
 * Builds a document fragment from a JSON object representing HTML.
 */
type ObjType = {
    tag: string;
    text?: string;
    attr?: object;
    childs?: ObjType[];
    child?: ObjType;
    Node?: Node;
};
export declare function json2html(object: ObjType): DocumentFragment;
export {};
