let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
   let item = document.createElement("li");
   item.innerText = inp.value;
   item.style.fontSize = "30px";
   

   let delBtn = document.createElement("button");
  
   delBtn.innerText= "delete";
   delBtn.style.color = "white";
   delBtn.style.borderColor = "black";
   delBtn.style.borderWidth = "3px";
   delBtn.style.fontSize = "1.1rem";
   delBtn.style.padding = "2px 2px";
   delBtn.style.margin = "7px";
   delBtn.style.borderRadius = "4px";
   delBtn.style.backgroundColor = "blue";
   
   delBtn.classList.add("delete");

   item.appendChild(delBtn);
   ul.appendChild(item);
   inp.value = "";
});

ul.addEventListener("click",function(event){
    
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});