// Function to open modal and display the clicked image
function openModal(image) {
    var modal = document.getElementById("modal");
    var enlargedImage = document.getElementById("enlargedImage");
    modal.style.display = "flex";  // Changed to flex to center the image
    enlargedImage.src = image.src;
    console.log("Modal opened");

}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}