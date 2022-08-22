let hasbulla = document.getElementById("hasbulla")
let usyk = document.getElementById("usyk")
let tyson = document.getElementById("tyson")


hasbulla.addEventListener("click", piclink);
usyk.addEventListener("click", piclink);
tyson.addEventListener("click", piclink);

function piclink(){
    let allImages = document.querySelectorAll("img");
    console.log(allImages)
    for (let i = 0;i < allImages.length;i++){
        allImages[i].classList.add("hide");
        //adds the class hide to all of the images
    }

    let picID = this.attributes["data-img"].value;
    let pic = document.getElementById(picID);
    // pic becomes the element that is clicked
    if (contains(pic.classList,"clicked")){
        //checks if the pic's class list has "clicked" if it does then the pic is hidden
        pic.className = "hide"
    }else{
        pic.className = "clicked";
        // if the pic hasn't been clicked it has no class apart from clicked
        for (let i = 0;i < allImages.length;i++){
            // loops through the image elements
            if (allImages[i] != pic){
                // checks if the image element is the same as pic if it isn't its class is returned to just hide to avoid more than one class having the clicked status leading to bugs
                allImages[i].className = "hide";
            }
        }
    }
}

function contains(list,obj){
    for (let i = 0;i < list.length;i++){
        if (list[i] === obj){
            // iterates through the list and if the list contains the object then true is returned
            return true
        }
    }
    return false
}
