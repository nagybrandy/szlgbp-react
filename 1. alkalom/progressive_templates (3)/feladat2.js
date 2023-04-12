const animated = document.querySelectorAll("[data-scroll]")
const observer = new IntersectionObserver(onObserve, {
  threshold: 1.0
})

function onObserve(entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('animate__animated', 
                                `animate__${entry.target.dataset.scrollAnimation}`)
    }
  })
 
}

animated.forEach(e => observer.observe(e))