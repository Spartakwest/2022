"use strict";

let input = document.querySelector('.input');
let list = document.querySelector('.list');

input.addEventListener('keypress', function(event){
    if(event.key == 'Enter'){
        let li = document.createElement('li');

        let task = document.createElement('span');
        task.classList.add('task')
        task.textContent = this.value;
        task.addEventListener('dblclick', function(){
            let update = document.createElement('input');
            update.value = task.textContent;
            task.textContent = '';
            task.appendChild(update);
            update.addEventListener('keypress', function(event){
                if(event.key == 'Enter'){
                    task.textContent = this.value;
                    this.textContent = '';
                }
            })
        })
        li.appendChild(task);

        let remove = document.createElement('span');
        remove.classList.add('remove')
        remove.textContent = 'видалити';
        remove.addEventListener('click', function(){
            li.textContent = '';
        })
        li.appendChild(remove);

        let complete = document.createElement('span');
        complete.classList.add('complete');
        complete.textContent = 'завершити';
        complete.addEventListener('click', function(){
            task.classList.add('done')
        })
        li.appendChild(complete);

        list.appendChild(li);

        this.value = '';
    }
})
