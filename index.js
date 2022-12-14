let Color = ["aqua","black","blue","fuchsia","gray","grey","green","lime", "maroon","navy", "olive", "purple", "red","silver", "teal", "white", "yellow"]


let main = document.querySelector("main")
let header = document.querySelector("header")
let h1 = document.querySelector("h1")
console.log(h1)

Color.forEach(color => {
    let button = document.createElement("button")
    button.style.width ="10rem"
    button.style.height = "10rem"
    button.style.backgroundColor = color;
    main.append(button)
    button.addEventListener("click" , function(){
        header.style.background = color;
        h1.innerText = color;
    })
})