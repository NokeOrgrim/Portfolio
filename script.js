const name = document.getElementById('name')
const complet_name = name.getAttribute("value")

function motTyping(word, index, lenght){
    if(index < lenght){
        setTimeout(() => {
            name.innerHTML += word[index]
            motTyping(word, index + 1, lenght)
        },350)
    }
}

setTimeout(() => {
    console.log(name)
    motTyping(complet_name, 0, 10)
})

const boutonNav = document.getElementById('onOff')
const nav = document.getElementById('nav')
const navReduit = document.getElementById('off')
const navAgrandit = document.getElementById('on')
let switchNav = 1;

boutonNav.onclick = (() => {

    console.log(switchNav)
    if (switchNav == 1){
        switchNav = 0
    }

    else{
        switchNav = 1
    }

    reactNav(switchNav)
}
)

reactNav(switchNav)
window.onresize = (() => {reactNav(switchNav)})

function reactNav(flag){

    if(flag === 1){
        console.log('on')
        navReduit.style.display = "none"
        navAgrandit.style.display = "block"
        boutonNav.innerHTML = "&#8656"
        boutonNav.style.fontSize = "xx-large"
        if(innerWidth > 800){
            nav.style.width = "1200px"}
        else if(innerWidth < 8000){
            nav.style.width = "2400px"
        }
        else{
            nav.style.width = "700px"
        }
    }

    else{
        console.log('off')
        navReduit.style.display = "block"
        navAgrandit.style.display = "none"
        boutonNav.innerHTML = "&#8658"
        boutonNav.style.fontSize = "large"
        if(innerWidth < 1200){
            nav.style.width = "450px"
        }else{
        nav.style.width = "200px"
        }
    }

}
