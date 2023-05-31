function openHero(evt, heroClass) {
    var i, gallery, tab;
    gallery = document.getElementsByClassName("card-box");
    for (i = 0; i < gallery.length; i++) {
        gallery[i].style.display = "none";
    }
    tab = document.getElementsByClassName("menu");
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(" active", "");
    }
    document.getElementById(heroClass).style.display = "flex";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
