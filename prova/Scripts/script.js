/*var demo = document.getElementById('demo');
demo.innerHTML = 'Hello World'*/
/*var demos = document.getElementsByTagName('p');
console.log('getElementsbyTagname',demos);
demos[0].innerHTML = 'hello world';

*/
/*

var demo = document.getElementById('demo');
console.log(demo.innerHTML);

demo.innerHTML = 'ciao';

console.log(demo.innerHTML);

console.log(demo.style);

demo.style.backgroundColor = 'red';

demo.style.color = 'white';

var container = document.getElementById('container');
console.log(container);


var content = container.getElementById('content');

console.log('content');

*/
/* var container = document.getElementById('demo');
container.onclick = showAlert;

function showAlert() {
    
    alert('hello world');
    
    
    
}



container.onmouseover = function() {
    
    container.style.backgroundColor = 'red';
    
    
    
    
} 



container.onmouseout = function() {
    
    container.style.backgroundColor = 'white';
}


*/


function showAlert(obj) {
    obj.innerHTML = 'new';
}


//1. Listen to window's scroll event and an element's scoll event
//2. Given two input text elements, get the values and calculate the sum
//3. Count how many click the user did on the HTML element
//4. Given a set of name, create random couples
//5. Change a input text to input button
//6. Remove element on click
//7. Return the children of the clicked element





function getValue() {
    var value1 = document.getElementById('value1').value
        , value2 = document.getElementById('value2').value
        , numero1 = parseInt(value1)
        , numero2 = parseInt(value2);
    var sum = numero1 + numero2;
    document.getElementById("risultato").innerHTML = sum;
}


var names = [];

function onAddNameClick(){
    
    var input = document.getElementById('name');
    var name = input.value;
    
   
    
    names.push(name);
    
    var list = document.getElementById('names-list');
    list.innerHTML
    
    
   for (var j = 0; j < names.lenght; j++) {
       
       var li = document.createElement('li');
       li.innerHTML = names[j];
       
       
       var list = document.getElementById('names-list');
       list.appendChild(li);
       
       
       
   }
    
    
}


