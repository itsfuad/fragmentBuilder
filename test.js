
import { json2html } from "./app.js";

const output = json2html({
    tag: 'div',
    attr: {
        class: 'container'
    },
    childs: [
        {
            tag: 'div',
            attr: {
                class: 'row'
            },
            childs: [
                {
                    tag: 'div',
                    attr: {
                        class: 'col'
                    },
                    child:{
                        tag: 'h1',
                        text: 'Hello World'
                    },
                },
                {
                    tag: 'div',
                    attr: {
                        class: 'col'
                    },
                    childs: [
                        {
                            tag: 'h1',
                            text: 'Hello World'
                        },
                        {
                            tag: 'p',
                            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.'
                        }
                    ]
                }
            ]
        }
    ]
});

console.log(output);