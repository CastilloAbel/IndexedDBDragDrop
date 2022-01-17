"use strict";
const input = document.getElementById("input");
const button = document.getElementById("submit");
const persons = document.querySelector(".persons");
const fragment = document.createDocumentFragment();
const img = document.querySelector(".conteiner-img");
const IDBRequest = indexedDB.open("database", 1);
const del = document.querySelector(".delete0")
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

    img.addEventListener("dragstart", (e)=>{
        e.dataTransfer.setData("person", e.target.className)
        console.log("se comenzo a mover");
    })
    del.addEventListener("dragover", e=>{
        e.preventDefault();
        console.log("se esta moviendo")
    })
    del.addEventListener("drop", ()=>{
          console.group("se solto")
   } )
