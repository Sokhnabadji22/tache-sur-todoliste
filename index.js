/*Faire un todolist avec Bootstrap et JavaScript avec les possibilités suivantes:
 1: ajout d'une tâche : l'utilisateur peut ajouter n tâches qu'il veut*/
// Recuperer les ID
const input1 = document.getElementById("floatingInputGroup1");
const ajouter = document.getElementById("id-btn");
const list = document.getElementById("myUl");
ajouter.addEventListener('click' , () => {
 //   Creation  div
    let divS = document.createElement('div');
    // divS.style.marginTop="10px";
    // let a = "div1"
        divS.classList.add("div1");   

//   Creation  li
    let li1 = document.createElement("li")
        list.appendChild(li1)
        li1.innerHTML = ajouter.value;

 //   Creation  span
    let span1 = document.createElement("span") 

    // creation button1
    let bouton1 = document.createElement("button");
    bouton1.classList.add("btn1")
    bouton1.innerText = "ToDo"
    span1.appendChild(bouton1) 
    
    // creation button2
    let bouton2 = document.createElement("button")
    bouton2.classList.add("btn2")
    bouton2.innerText = "Doing"
    span1.appendChild(bouton2)

    // creation button3
    let bouton3 = document.createElement("button")
    bouton3.classList.add("btn3")
    bouton3.innerText = "Done"
    span1.appendChild(bouton3)

    divS.appendChild(span1);
    list.appendChild(divS)

    input1.value = "";
    // changement color
    bouton1.addEventListener('click', () => {
        divS.style.backgroundColor = 'red';
    });

    bouton2.addEventListener('click', () => {
        divS.style.backgroundColor = 'orange';
    });

    bouton3.addEventListener('click', () => {
        divS.style.backgroundColor = 'green';
    });
});
// alert('bonjour');