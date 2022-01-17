const input = document.getElementById("input");
const button = document.getElementById("submit");
const persons = document.querySelector(".persons");
const fragment = document.createDocumentFragment();
const img = document.querySelector(".image");
const IDBRequest = indexedDB.open("database", 1);
var personas = 0;
button.addEventListener("click", ()=>{
    const person = document.createElement("DIV");
    person.classList.add("person", `person${personas}`);
    const htmlCode  = `
    <input class="names name${personas}" readonly="true" value="${input.value}" type="text">
    <input class="modify modify${personas}" type="submit" value="Modify">
    <input class="delete delete${personas}" type="submit" value="Delete">`;
    person.innerHTML = htmlCode;
    fragment.appendChild(person);
    persons.appendChild(fragment);
    personas++;
});
// if (personas > 0){
    // const del = document.querySelector(".delete")
    // del.addEventListener("dragover", e=>{
        // e.preventDefault();
        // console.log("se esta moviendo")
    // })
    // img.addEventListener("drop", e=>{
    //  }     console.group("se solto")
    // })
// }
