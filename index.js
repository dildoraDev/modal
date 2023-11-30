const showModal = document.querySelectorAll(".show-modal"); 
const modal = document.querySelector(".modal"); 
const closeModal = document.querySelector(".close-modal"); 
const overlay = document.querySelector(".overlay");

showModal.forEach((e)=>{
    e.addEventListener("click", ()=>{
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    })
});

closeModal.addEventListener("click", ()=>{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
});

overlay.addEventListener("click", ()=>{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
});