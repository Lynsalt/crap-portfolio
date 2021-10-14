const ul = document.querySelector("ul");
const btn = document.querySelector("button");
const items = document.querySelectorAll("li")

btn.addEventListener("click", ()=>{
    const li = document.createElement('li');
    li.textContent ="Go shopping";
    ul.prepend(li)

})

// items.forEach(item=>{
//     item.addEventListener("click", (e)=>{
//         console.log("event in li")
//         e.stopPropagation()
//     })
// })

ul.addEventListener("click", (e)=>{
   if(e.target.tagName === 'LI'){
       e.target.remove();
   }
  
});

