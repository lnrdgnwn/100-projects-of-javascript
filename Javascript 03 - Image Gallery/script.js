let scrollContainer = document.querySelector(".gallery-container");
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');
let images = document.querySelectorAll('.gallery img');
let overlay = document.getElementById('overlay');
let modalImage = document.getElementById('modalImage');
let closeBtn = document.getElementById('closeBtn');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehaviour = "smooth";
});

backBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft -= 900;
});

nextBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft += 900;
});

images.forEach(image => {
    image.addEventListener('click', () => {
        modalImage.src = image.src;
        overlay.classList.remove('hidden');
    });
});

closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.add('hidden');
    }
});
