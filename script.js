
const item = document.querySelector('#item')
const toDoBox = document.querySelector('#to-do-box')

item.addEventListener("keyup",function(event){
     if(event.key == 'Enter')
     {
        addToDo(item.value);
        item.value =' '
     }

} ) 

// list item addintion
const addToDo = (item) =>{
    const listItems = document.createElement('li')
    listItems.innerHTML = `
     ${item}
    <i class="fa-regular fa-circle-xmark icon"></i>
    `  
    listItems.addEventListener('click', function(){
         this.classList.toggle("done") // toggle ka matlb class add karna remove karna / add karna remove karna 
            }) 

    listItems.querySelector('i').addEventListener('click', function(){
         listItems.remove();
    })        
    toDoBox.appendChild(listItems);
}