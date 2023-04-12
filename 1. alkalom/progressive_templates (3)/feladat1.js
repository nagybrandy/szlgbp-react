const nav = document.querySelector("nav")

//let waiting = false
window.addEventListener('scroll', _.throttle(onScroll, 1000))

function onScroll() {
 // if(!waiting){
    nav.classList.toggle("navbar-scrolled", window.scrollY >= 200)
   // waiting = true
    console.log("asd")
    /* if(window.scrollY >= 200){
      nav.classList.add("navbar-scrolled")
    } else {
      nav.classList.remove("navbar-scrolled")
    } */
  // }
}