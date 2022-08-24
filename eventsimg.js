const images = document.querySelectorAll(".img");
console.log(images)

const imageHandler = (image) => {
    if (!image.classList.contains("hidden")) {
        return image.classList.add("hidden");
      }; 
    // checks if the clicked image isn't hidden and if it isn't it hides it and returns out of the function

    images.forEach((image) => {
        image.classList.add("hidden");
    });
    // hides each image

    image.classList.toggle("hidden");
    //unhides or hides clicked image
}
