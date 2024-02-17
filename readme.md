# Javascript object to HTML fragment

Json to HTML is a function that converts a JSON object to HTML document fragment. This fragment then can be directly used inside innerHTML.

 example
 ```js
 const obj = {
  tag: 'div',
  text: 'Hello, World!',
  attr: {
   class: 'container',
   id: 'main'
  },
  childs: [
  {
   tag: 'h1',
   text: 'Hello, World!'
   },
  ]
 }
 const fragment = fragmentBuilder(obj);
 ```
