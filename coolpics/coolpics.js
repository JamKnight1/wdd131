
const gallery = document.getElementById('pictures');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
// menu button
const menuButton = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu"); 

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    
// Code to show modal  - Use event parameter 'e'   
    console.log(e.target.src);
    modalImage.src = e.target.src.replace("Wallet", "Choking");
    modal.showModal();
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
// menu button code
menuButton.addEventListener("click", () => {

    menuButton.classList.toggle("change");
    mobileMenu.classList.toggle("show");
});
          