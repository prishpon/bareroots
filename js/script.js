function menuToggle(){
    let toggle = document.querySelector(".toggle");
    let menu = document.querySelector("nav");

    if (menu.classList.contains("active")) {
                menu.classList.remove("active");
                    
            } else {
                menu.classList.add("active");

}
}