import {sayHello} from './modules/sayHello';
import {FirstClass} from './modules/firstClass';
import {User} from './interfaces/user';
import * as $ from 'jquery';


function firstFunction(user:User,divname:string){
    const elt = document.getElementById(divname);
    elt.innerText = sayHello(user.name);
    console.log(`Username: ${user.name}`);
}

function httpRequest(url:string){
    $.get(url, function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
    });
}
let firstUser = {name:"Steve",age:23};

firstFunction(firstUser,"output");

let newObj = new FirstClass("This is a class");
const dom = document.getElementById("output2");
dom.innerText = newObj.greet();
console.log(`Class message: ${newObj.greet()}`);
