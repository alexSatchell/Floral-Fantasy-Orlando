var images = new Array();

function preloadImages(){
    for (i = 0; i < preloadImages.arguments.length; i++)
    {
        images[i] = new Image();
        images[i].src = preloadImages.arguments[i];
    }
}

preloadImages("images/flowers/confirmation-flower.jpg",
            "images/flowers.contact.jpg",
            "images/flowers/flower-partners.jpg,",
            "images/flowers/flowerabout.jpg",
            "images/flowers/flowerreturn.jpg",
            "images/flowers/indexbodypic");