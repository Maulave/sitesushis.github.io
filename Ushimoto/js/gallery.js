var cardGallery = document.getElementsByClassName('cardText');
var fullScreen = document.getElementById("fullScreen");
console.log(cardGallery)


function open(e) {

    /* on retire le derniere enfant de fullSize (balise-echec) */
    fullScreen.removeChild(fullScreen.lastChild);

    /* On enleve le display none de noneBox */
    fullScreen.style.display = "flex";
    
    /* On crée une balise img */
    var newDiv = document.createElement("img");
    console.log(e.currentTarget)

    var elementSibling = e.currentTarget.previousElementSibling;
    console.log(elementSibling.src)

    /* on donne la source de l'image sur laquel on clique a cette img */
    newDiv.src = elementSibling.src;
    console.log(e.currentTarget.src)
    /* on met cette image dans la balise ayant l'ID #fullSize à la fin */
    fullScreen.insertAdjacentElement("beforeend", newDiv)
    /* On donne la class absolute a cette balise img */
    newDiv.classList.add("absolute")
}


for (i = 0; cardGallery.length > i; i++) {
    cardGallery[i].addEventListener("click", open)
}

function closeBox() {

    for (i = 0; cardGallery.length > i; i++) {

        cardGallery[i].classList.remove("absolute")
        fullScreen.style.display ="none";
    }
}

count = 0;

function leftBox() {

    fullScreen.removeChild(fullScreen.lastChild);

    /* Si count est plus petit que gallery.length - galleru.length -1 alors 
    count est égale a gallery.length -1 */
    if (count < cardGallery.length - (cardGallery.length - 1)){
        count = cardGallery.length -1;
    
    /* si count est plus grand que gallery.length alors count = gallery.length -1 */
    } else if (count > cardGallery.length){ 
        count = cardGallery.length -1;

    /* si count est plus petit que gallery.length alors count est decrémenté de 1 */
    } else if(count < cardGallery.length) {
        count--;
        
    /* Si il y a autre chose count égale a 1 */
    } else{
        count = 1;
    }

    var newDiv = document.createElement("img");
    var elem = cardGallery[count].previousElementSibling;
    newDiv.src = elem.src;
    fullScreen.insertAdjacentElement("beforeend", newDiv)
    newDiv.classList.add("absolute");
}

function rightBox() {

    fullScreen.removeChild(fullScreen.lastChild);

    /* Je crée ma condition */
    if (count < cardGallery.length -1) {
        count++;
        
    }else {
        count = 0;
    }

    /* je crée ma div */
    var newDiv = document.createElement("img");
    /* je sible l'élément avant ma cible */
    var elem = cardGallery[count].previousElementSibling;
    /* Je récupère la source de l'image et la donne à ma nouvelle balsie */
    newDiv.src = elem.src;
    /* je passe ma balise en tant que derniere enfant de fullSize */
    fullScreen.insertAdjacentElement("beforeend", newDiv)
    /* Je lui donne la class "absolute" pour la faire apparaitre */
    newDiv.classList.add("absolute");
}