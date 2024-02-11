# Javascript object to HTML fragment

This allows you to create a HTML fragment from a javascript object.

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