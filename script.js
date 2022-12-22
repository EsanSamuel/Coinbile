//declaring variables from HTML file
const body = document.querySelector("body")
themeBtn = document.querySelector(".dark-mode")
const fileInput = document.querySelector(".file-input")
chooseBtn = document.querySelector(".choose")
previewImg = document.querySelector(".preview-img img")
toolBtns = document.querySelectorAll(".tool")
Send = document.getElementById("send")
Profile = document.getElementById("profile")
let submit = document.querySelector(".submit")
let Name = document.getElementById("name")
let Acct = document.getElementById("Acct")
let Amount = document.getElementById("Amount")
let Elem= document.querySelector(".notes")
Save = document.querySelector(".save")
let First = document.getElementById("First")
FirstElem = document.querySelector(".note")
Naira1 = document.getElementById("naira1")
Naira2 = document.getElementById("naira2")
Naira3 = document.getElementById("naira3")
Naira4 = document.getElementById("naira4")
Naira5 = document.getElementById("naira5")
KeysBtns = document.querySelectorAll(".keys")
Success = document.getElementById("success")
let notes = JSON.parse(localStorage.getItem("notes"))


if(notes){
    notes.forEach(element=>{
        addRecent(element)
    })
}


//Toggle light-mode and dark-mode
themeBtn.addEventListener("click",()=>{
    body.classList.toggle("dark")
})

//Select and view picture in the profile picture space
const loadImage = () =>{
    let file = fileInput.files[0]
    if(!file) return
    previewImg.src= URL.createObjectURL(file)
}

fileInput.addEventListener("change", loadImage)
chooseBtn.addEventListener("click",() =>fileInput.click())

//Make selection option active by changing color
toolBtns.forEach(btn=> {
    btn.addEventListener("click",() =>{
        document.querySelector(".options .active")
        .classList.remove("active")
        btn.classList.add("active")
    })
})


//popping-up Transfer form
function openTransfer(){
    Send.classList.add("openT")
}

function closeTransfer(){
    Send.classList.remove("openT")
}

//recording recent transfers
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    addRecent()
})

function addRecent(){
    let card = document.createElement("div")
    card.classList.add("rr")
    card.innerHTML=`
    <h1 class="rectt">${Name.value}</h1>
    <h1 class="rectt">${Acct.value}</h1>
    <h1 class="rectt">${Amount.value}</h1>
    <button class="bbn">Delete</button>
    `
    Elem.appendChild(card)
    updateLS()
    Name.value = ""
    Acct.value = ""
    Amount.value=""

    //deleting recent transfers
    let Del = card.querySelector(".bbn")

    Del.addEventListener("click",()=>{
        card.remove()
        updateLS()
    })
}

function updateLS(){
    let card=  document.querySelectorAll(".rr")
    let arr=[]
    card.forEach(element =>{
        arr.push({
            Name:element.children[0].innerText,
            Acct:element.children[1].innerText,
            Amount:element.children[2].innerText
        })
    })
    localStorage.setItem("notes",JSON.stringify(arr))
}

//opening profile form
function openProfile(){
    profile.classList.add("openP")
}

function closeProfile(){
    profile.classList.remove("openP")
}

//activating welcome message
Save.addEventListener("click",(e)=>{
    e.preventDefault
    addName()
})

function addName(){
   let cardname = document.createElement("div")
   cardname.classList.add("welcome")
   cardname.innerHTML = `
   <h1 class="welcome">Welcome, ${First.value}</h1>
   `
   FirstElem.appendChild(cardname)
   
}

//changing amount from dollar to naira
Naira1.addEventListener("click",()=>{
    Naira1.innerHTML = "#10,097,370"
})

Naira2.addEventListener("click",()=>{
    Naira2.innerHTML = "#3,807875"
})

Naira3.addEventListener("click",()=>{
    Naira3.innerHTML = "#8,513,294"
})

Naira4.addEventListener("click",()=>{
    Naira4.innerHTML = "#7,999,881"
})

Naira5.addEventListener("click",()=>{
    Naira5.innerHTML = "#21,143,454.41"
})

//Make selection chart active by changing color
KeysBtns.forEach(btn => {
    btn.addEventListener("click",() => {
        document.querySelector(".chart .selected")
        .classList.remove("selected")
        btn.classList.add("selected")
    })
})

//Open Success message after payment
function openSuccess(){
    Success.classList.add("openS")
}

//Close Success message after payment
function closeSuccess(){
    Success.classList.remove("openS")
}