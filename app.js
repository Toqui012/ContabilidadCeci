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
            _navItem.style.transition = "0.4s"
            _navItem.style.color = "#596275"
        })

    })

}

function caca(){
    console.log("hola")
}


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