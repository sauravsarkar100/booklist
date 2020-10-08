const titel = document.querySelector('#titel');
const auter = document.querySelector('#auter');
const year = document.querySelector('#year');
const btn = document.querySelector('.add-book');
const booklist = document.querySelector('#book-list');

btn.addEventListener('click', function(e){
    e.preventDefault();
    
    if(titel.value == '' && auter.value == '' && year.value == ''){
        alert('fromfilop koren');
    }else{
        const newrow = document.createElement('tr');
        const newtitel = document.createElement('th');
        newtitel.innerHTML = titel.value;
        newrow.appendChild(newtitel);
        
        const newauter = document.createElement('th');
        newauter.innerHTML = auter.value;
        newrow.appendChild(newauter);
        
        const newyear = document.createElement('th');
        newyear.innerHTML = year.value;
        newrow.appendChild(newyear);
        
        booklist.appendChild(newrow);
        
    }
    
});