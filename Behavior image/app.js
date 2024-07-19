let goUp = document.querySelector("#goUp");
onscroll = _ => {
    if (scrollY > 0) {
        goUp.classList.remove("opacity-0")
    } else {
        goUp.classList.add("opacity-0")
    }
}
goUp.onclick = _ => {
    scrollTo(0, 0)
  
}