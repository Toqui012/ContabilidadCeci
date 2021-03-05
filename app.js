function pintar(){

    const _navItems = document.querySelectorAll(".nav-hover");
    _navItems.forEach(_navItem =>  {
        
        _navItem.addEventListener("mouseenter",() =>
        {
            console.log("Movimiento Mouse")
            _navItem.style.color = "#e74c3c";
        
        })

        _navItem.addEventListener("mouseleave",() => 
        {
            console.log("Movimiento Afuera")
            _navItem.style.transition = "0.3s"
            _navItem.style.color = "red";
        })

    })

}

function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}



function caca(){
    console.log("hola")
}


navSlide();
pintar()


// selector.addEventListener("mouseenter",() =>
    // {
    //     console.log("Movimiento Mouse")
    //     selector.style.color = "red";
 
    // })

    // selector.addEventListener("mouseleave",() => 
    // {
    //     console.log("Movimiento Afuera")
    //     selector.style.color = "green"
    // })