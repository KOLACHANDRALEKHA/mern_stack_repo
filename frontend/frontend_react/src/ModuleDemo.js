//There are three approaches to load the named exported things first way directly load first variable or named function or if you want to all the function or all the variables from your file then you can import *  as some variable name you can provide then you can load this.

// default export:A module cannot have multiple exports.If you are going use default export inside your module or inside your file their will be only one default. you can't default export multiple.

export function sayHi(){
    console.log("saying hiiii");
}

export function add(){
    console.log("add calling");
}


