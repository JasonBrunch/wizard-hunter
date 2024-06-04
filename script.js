document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var closeButton = document.querySelector(".close");
    if (modal) {
        modal.classList.add("hidden");
    }
    if (closeButton) {
        closeButton.classList.add("hidden");
    }
});

function openModal(element) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var closeButton = document.querySelector(".close");

    modal.classList.remove("hidden");
    modal.style.display = "flex";
    modalImg.src = element.src;

    if (closeButton) {
        closeButton.classList.remove("hidden");
    }
}

function closeModal(event) {
    var modal = document.getElementById("myModal");
    var closeButton = document.querySelector(".close");

    if (event.target === modal || event.target.className === "close") {
        modal.style.display = "none";
        if (closeButton) {
            closeButton.classList.add("hidden");
        }
    }
}

window.onload = function() {
    var modal = document.getElementById("myModal");
    if (modal) {
        modal.style.display = "none";
    }
}