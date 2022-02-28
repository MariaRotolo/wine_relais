

//const navOpen = document.querySelector("#navigation_menu");
const navIcon = document.getElementById("toggle");


const toggleBetweenClass = () => {
	document.getElementById("navigation_menu").classList.toggle("navigation_active");
};

navIcon.addEventListener("click", toggleBetweenClass);



 ///////////////////////// SLIDER HERO//////////////////////

const imgs = [ "https://images.unsplash.com/photo-1503427128716-12b0ed4822bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80",
 "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
 "https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
 "https://images.unsplash.com/photo-1541971897566-308cf7ad0934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
 "https://images.unsplash.com/photo-1623190632241-20a391a7b2e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3772&q=80"];

const slider = document.querySelector(".hero_container");

let imagesIndex = 0;

let changeImg = setInterval(() => {
slider.style.backgroundImage = `url(${imgs[imagesIndex]})`;

if (imagesIndex < imgs.length - 1) {
imagesIndex++;
} else {
imagesIndex = 0;
}
}, 4000);

 ///////////////////////// SLIDER //////////////////////

 const imgsSlider = [ "https://images.unsplash.com/photo-1596805892053-7c2180568a1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=981&q=80",
 "https://images.unsplash.com/photo-1595232878814-74d5a59ed9e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1043&q=80",
 "https://images.unsplash.com/photo-1598306442928-4d90f32c6866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
 "https://images.unsplash.com/photo-1541600642371-d4a21582da44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
 "https://images.unsplash.com/photo-1536745511564-a5fa6e596e7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1396&q=80",
    ];

const sliderOne = document.querySelector("#galleria");
const sliderTwo = document.querySelector("#slider_two");

let Index = 0;

let change = setInterval(() => {
sliderOne.style.backgroundImage = `url(${imgsSlider[Index]})`;

if (Index < imgsSlider.length - 1) {
Index++;
} else {
Index = 0;
}
}, 3000);




//////////////////////////MODALE ARTICOLO ///////////////////////////////

const modalOne = document.querySelector("#modal_one");
const openModal = document.querySelector("#open_modal_one");
const closeModal = document.querySelector("#modal_button_one");


openModal.addEventListener("click", () => {
    modalOne.classList = ("modal_visible");
})
closeModal.addEventListener("click", () => {
    modalOne.classList = ("modal_hidden");
})
