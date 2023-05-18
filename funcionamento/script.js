const toggleNav = document.querySelector(".toggle-nav")

function toggleMenu(){
  if(toggleNav.classList.contains("extendido")){
    toggleNav.classList.remove("extendido")
    toggleNav.animate([
        { opacity: "100%" },
        { opacity: "0%" }
    ],{
        duration: 100,
    })
    setTimeout(()=> {
      toggleNav.style.display = "none"
    }, 100)
  }else{
    toggleNav.classList.add("extendido")
    toggleNav.animate([
      { opacity: "0%" },
      { opacity: "100%" }
    ],{
      duration: 100,
    })
    toggleNav.style.display = "flex"
    
  }
}

document.querySelector(".toggle-botao").addEventListener("click", () => {
  toggleMenu()
})
