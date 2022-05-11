const search = document.getElementById("search__input");
const publish = document.getElementById("footer__input");

search.addEventListener("focus", searchFocus);
search.addEventListener("blur", searchBlur);

publish.addEventListener("focus", publishFocus);
publish.addEventListener("blur", publishBlur);


function searchFocus() {
   document.getElementById("search__ico--search").style.display = "none";
   document.getElementById("search__ico--clear").style.display = "none";
 }
 
 function searchBlur() {
   document.getElementById("search__ico--search").style.display = "block";
 }

 function publishFocus() {
    document.getElementById("footer__input-link").style.color = "#0095f6";
 }

 function publishBlur() {
   document.getElementById("footer__input-link").style.color = "#b7e1fc";
}



