

//to inseret a paragraph or header in any line 
/*var h = document.createElement('h1')
var value=document.createTextNode('hello world')
h.appendChild(value)
document.querySelector('h1').appendChild(h)*/

/*var val=5
while(val>0)
{
    console.log(val);
    val--;
}*/

var ul = document.getElementById('lists');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem)

var removeallButton = document.getElementById('removeAll');
removeallButton.addEventListener('click', removeallItem)


function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('lists');
    var textnode = document.createTextNode(item)

    if (item === '') {
        var h = document.createElement('h1')
        var value=document.createTextNode('Please enter a element to insert')
        h.appendChild(value)
        document.querySelector('h1').appendChild(h)

        return false;
  
        //Add a p tag and assign a value of "Enter your todo"
    } else {
        //create li
        li = document.createElement('li');

        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        //create label
        var label = document.createElement('label');
        label.setAttribute('for', 'item') //optional

        //add these elements on web page

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);

        setTimeout(() => {
            li.className = 'visual';
        }, 2);
        

        input.value = '';

    }
   
}

function removeallItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
            ul.removeChild(li[index])
        }
       
    }

function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while ( li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
       
    }



    

}