var items = ['item 1', 'item 2', 'item 3']
var list = document.querySelector('#myList');

items.forEach(function (item) {
   createItem(item);
    
});

//create item
document.querySelector('#btnCreate').onclick = function () {
    var item = document.querySelector('#txtInput').value;
    if(item === ''){
       alert('Please enter your text');
        return;
    }
    createItem(item);
}
function createItem(item) {
    var li = document.createElement('li');
    var txt = document.createTextNode(item);
    li.className='list-group-item';
    li.appendChild(txt);
    list.appendChild(li);

    var span = document.createElement('span');
    var text = document.createTextNode('\u00D7');
    span.className='close';
    span.appendChild(text);
    li.appendChild(span);
    span.onclick = function () {
        var li = this.parentElement; 
        li.style.display='none';}
}