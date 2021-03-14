

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

function changeText(){
    const hoverList = document.querySelectorAll("wrapper-list ul li:hover::before");
    const colorText = document.querySelectorAll("wrapper-list ul li p");

    hoverList.addEventListener("click", () => {
        colorText.style = "color: #fff";
    });


}


navSlide();



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