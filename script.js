let currentIndex = 0;
let images = document.querySelectorAll(".gallery img");

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        openLightbox(img.src);
    });
});

function openLightbox(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function nextImg() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function prevImg() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("lightbox-img").src = images[currentIndex].src;
}