function search_open(event) {
    const search_menu = document.getElementById("menu-dropdown-search");
    const menu = document.querySelectorAll(".menu-dropdown");
    const blurred_section = document.querySelector(".blur");

    for(let i = 0; i < menu.length; i++){
        if (menu[i] !== search_menu && !menu[i].classList.contains("hidden")) {
            menu[i].classList.add("hidden");
            blurred_section.classList.add("hidden");
        }
    }
    const isHidden = search_menu.classList.contains("hidden");
    search_menu.classList.toggle("hidden");
    blurred_section.classList.toggle("hidden");
    blurred_section.style.top = window.pageYOffset + "px";
    document.body.classList.add("no-scroll");

    if (isHidden) {
        // Se il menu è appena stato aperto, aggiungi listener per chiuderlo
        blurred_section.addEventListener("mouseover", search_open);
    } else {
        // Se è stato chiuso, rimuovi il listener
        blurred_section.removeEventListener("mouseover", search_open);
        document.body.classList.remove("no-scroll");
    }
}
function shop_open(event) {
    const search_menu = document.getElementById("menu-dropdown-search");
    const shop_menu = document.getElementById("menu-dropdown-shop");
    const menu = document.querySelectorAll(".menu-dropdown");
    const blurred_section = document.querySelector(".blur");

    for(let i = 0; i < menu.length; i++){
        if (menu[i] !== shop_menu && !menu[i].classList.contains("hidden")) {
            menu[i].classList.add("hidden");
            blurred_section.classList.add("hidden");
        }
    }

    const isHidden = shop_menu.classList.contains("hidden");
    shop_menu.classList.toggle("hidden");
    blurred_section.classList.toggle("hidden");
    blurred_section.style.top = window.pageYOffset + "px";
    document.body.classList.add("no-scroll");

    if (isHidden) {
        blurred_section.addEventListener("mouseover", shop_open);
    } else {
        blurred_section.removeEventListener("mouseover", shop_open);
        document.body.classList.remove("no-scroll");
    }
}

function store_open(event) {
    event.preventDefault();
    const store_menu = document.getElementById("menu-dropdown-store");
    const menu = document.querySelectorAll(".menu-dropdown");
    const blurred_section = document.querySelector(".blur");

    for(let i = 0; i < menu.length; i++){
        if (menu[i] !== store_menu && !menu[i].classList.contains("hidden")) {
            menu[i].classList.add("hidden");
            blurred_section.classList.add("hidden");
        }
    }

    const isHidden = store_menu.classList.contains("hidden");
    store_menu.classList.toggle("hidden");
    blurred_section.classList.toggle("hidden");
    blurred_section.style.top = window.pageYOffset + "px";
    document.body.classList.add("no-scroll");

    if (isHidden) {
        blurred_section.addEventListener("mouseover", store_open);
    } else {
        blurred_section.removeEventListener("mouseover", store_open);
        document.body.classList.remove("no-scroll");
    }
}

function menu_open(event) {
    const menu = document.getElementById("menu-dropdown-complete");
    const list_menu = document.querySelectorAll(".menu-dropdown");

    for(const menu_x of list_menu){
        if (!menu_x.classList.contains("hidden") && menu_x !== menu) {
            menu_x.classList.add("hidden");
        }
    }

    menu.classList.toggle("hidden");
    document.body.classList.add("no-scroll");
    const isHidden = menu.classList.contains("hidden");
    if (isHidden) {
        document.body.classList.remove("no-scroll");
    }
}

const complete_menu_button = document.getElementById("menu-button");
complete_menu_button.addEventListener("click", menu_open);
const store_link = document.querySelector("a[data-index='0']");
store_link.addEventListener("mouseover", store_open);
const shop_button = document.getElementById("shop-menu-button");
shop_button.addEventListener("click", shop_open);
const search_button = document.getElementById("search-shop-menu-button");
search_button.addEventListener("click", search_open);

//------------------------------------------------------------//

const images = [
    "https://is1-ssl.mzstatic.com/image/thumb/hjmYsl20uNCFQ9sqjiQIYw/689x387.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/5geoozRQUAjDnWF2KLHyJg/980x551.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/uemUr1iuDVlIR_UQxdOaeg/980x551.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/mlNnLrkeXFsJh7QVz4ZMsg/980x551.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/o2aggH8izLNOxqIsP9O1pg/980x551.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/5tQkYfzU9bSMUol0GajO4w/980x551.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/e6_6t4WH4pUTV0plZH7R9w/980x551.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/LEDx4gCVQd_lTJt81zQq8w/980x551.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/YMYLvOCaoEQe-Jg6Rmbl1Q/980x551.jpg"
]
const phrases = [
    "Drammatico • Non fidarti del vicino.",
    "Commedia • Seth Rogen si tuffa nel caos di Hollywood in questa<br>satira stellare",
    "Azione • Da giugno al cinema",
    "Poliziesco • Non se ne esce puliti.",
    "Thriller • Il lavoro nobilità l'uomo.",
    "Giallo • Quando non ti fidi di te, di chi ti puoi fidare?",
    "Thriller • Leo Woodall interpreta un brillante studente che svela<br>un complotto ad alto rischio",
    "Fantascienza • Per vivere, serve qualcosa per cui valga la pena<br>morire.",
    "Azione • George Clooney e Brad Pitt sono risolvi-problema rivali<br>ingaggiati per lo stesso lavoro."
]

function nextImage(event) {
    let current_image = document.querySelector("#carousel-section .carousel-container");
    const currentUrlImage = getComputedStyle(current_image).backgroundImage;

    const currentUrl = currentUrlImage.slice(5, -2); // Estraggo l'URL rimuovendo "url(" e ")"
    
    let index = 0;
    for (const img of images) {
        if (currentUrl === img) {
            break;
        }
        index++;
    }
    const nextIndex = (index + 1) % images.length;

    current_image.style.backgroundImage = `url('${images[nextIndex]}')`;
    for(const bottom_button of bottom_buttons) {
        if(bottom_button.classList.contains("selected")){
            bottom_button.classList.remove("selected");
        }
        if(parseInt(bottom_button.getAttribute('data-index')) === nextIndex){
            bottom_button.classList.add("selected");
        }
    }

    const span = document.getElementById("phrase");
    span.innerHTML = phrases[nextIndex];
}

function previousImage(event) {
    let current_image = document.querySelector("#carousel-section .carousel-container");
    const currentUrlImage = getComputedStyle(current_image).backgroundImage;

    const currentUrl = currentUrlImage.slice(5, -2); 
    
    let index = 0;
    for (const img of images) {
        if (currentUrl === img) {
            break;
        }
        index++;
    }
    const previousIndex = (index - 1 + images.length) % images.length;

    current_image.style.backgroundImage = `url('${images[previousIndex]}')`;
    for(const bottom_button of bottom_buttons) {
        if(bottom_button.classList.contains("selected")){
            bottom_button.classList.remove("selected");
        }
        if(parseInt(bottom_button.getAttribute('data-index')) === previousIndex){
            bottom_button.classList.add("selected");
        }
    }

    const span = document.getElementById("phrase");
    span.innerHTML = phrases[previousIndex];
}

function newImage(event) {
    let current_image = document.querySelector("#carousel-section .carousel-container");
    
    for(const bottom_button of bottom_buttons) {
        bottom_button.classList.remove("selected");
    }

    const button = event.currentTarget;
    const index = button.getAttribute('data-index');

    current_image.style.backgroundImage = `url('${images[index]}')`;
    button.classList.add("selected");
    const span = document.getElementById("phrase");
    span.innerHTML = phrases[index];
}


const button_left = document.getElementById("button-left");
button_left.addEventListener("click", previousImage);
const button_right = document.getElementById("button-right");
button_right.addEventListener("click", nextImage);
const bottom_buttons = document.querySelectorAll("#carousel-buttons button");
for(const bottom_button of bottom_buttons) {
    bottom_button.addEventListener("click", newImage);
}