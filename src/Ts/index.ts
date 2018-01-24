import {sayHello} from './modules/sayHello';
import {FirstClass} from './modules/firstClass';
import {User} from './interfaces/user';

function firstFunction(user:User,divname:string){
    const elt = document.getElementById(divname);
    elt.innerText = sayHello(user.name);
}

let firstUser = {name:"Steve",age:23};

firstFunction(firstUser,"output");

let newObj = new FirstClass("This is a class");
const dom = document.getElementById("output2");
dom.innerText = newObj.greet();