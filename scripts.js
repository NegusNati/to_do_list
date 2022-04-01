let task = document.getElementById("task-textfield");
let addBtn = document.getElementById("add-button");
let ourDiv = document.getElementById("the-list");

addBtn.addEventListener("click" , function () {
    let paragraph = document.createElement('p');
    paragraph.classList.add("paragraph-styling");
    let value = task.value;
    value = value.toString();
    console.log( value.length);
    if(value.length >= 1){ // if the text field is empty 
        paragraph.innerText = `${value}`;
        ourDiv.appendChild(paragraph);
        task.value = "";
        paragraph.addEventListener("click", ()=> {
            paragraph.style.textDecoration = "line-through";
        })
        paragraph.addEventListener("dblclick", () => {
            paragraph.innerText = "";
        })
    }else{
        return;
    }
    
})