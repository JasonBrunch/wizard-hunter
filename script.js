function openModal(element) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");

    modal.style.display = "flex";
    modalImg.src = element.src;
}

function closeModal(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal || event.target.className === "close") {
        modal.style.display = "none";
    }
}