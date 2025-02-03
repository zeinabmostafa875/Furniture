function rateProduct(starElement, rating) {
    let stars = starElement.parentNode.children;
    for (let i = 0; i < stars.length; i++) {
        if (i < rating) {
            stars[i].classList.add("selected");
        } else {
            stars[i].classList.remove("selected");
        }
    }
}