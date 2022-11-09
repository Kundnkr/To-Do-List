var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', createItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItem);

function createItem(e){
    e.preventDefault();
    // console.log(e);
    var newitem = document.getElementById('new-item').value;
    var li=document.createElement('li');
    li.className='item';
    li.appendChild(document.createTextNode(newitem));
    var deleteButton = document.createElement('button');
    deleteButton.className = "delete-btn";
    deleteButton.appendChild(document.createTextNode('x'));
    li.appendChild(deleteButton);
    itemList.appendChild(li);
    newitem.value="";
    form.reset();
}

function removeItem(e){
    if(e.target.classList.contains('delete-btn')){
        if(confirm("Are You Sure ?")){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItem(e){
    //Covert in to lower case 
    var text=e.target.value.toLowerCase();
    var items = document.getElementsByTagName('li');
    console.log(items);
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}