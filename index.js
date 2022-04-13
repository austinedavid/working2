const controls = document.querySelectorAll(".control")


const option = {
    root: null,
    threshold: 0.5,
    rootmargin: "-150px",
}
const observer = new IntersectionObserver(function(entries, observer){

    entries.forEach(enter=>{
        if(!enter.isIntersecting){
            enter.target.classList.remove("animating")
        }
        else{
            enter.target.classList.add("animating");
            // observer.unobserve(enter.target)
        }
            
    })
},option)

controls.forEach(cons=>{
    observer.observe(cons)
})
