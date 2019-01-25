import Search from '/app/Controller/Search.js';
import * as CardTemplateHTMLMarkup from '/app/Templates/Parts/Card.js';

var searchButton = document.getElementById('search-button'),
    searchBox = document.getElementById('search-box');


searchButton.onclick = function(e){
    let target = e.target || e.srcElement;
    target.parentElement.classList.toggle('open');
};

searchBox.onchange = function(e){
    let searchController = new Search();
    searchController.renderSearchJson(e.target.value)
        .then((value) => {

            let  movieCardList = document.getElementById('movie-card-list');
            let newCardList = document.createElement('div');
            newCardList.className = movieCardList.className;
            newCardList.id = movieCardList.id;

            movieCardList.remove();

           let childrens = new DOMParser().parseFromString(CardTemplateHTMLMarkup.generate(value.results),'text/html').body.children;
            for (let children in childrens){
               if(!isNaN(children)){
                   newCardList.appendChild(childrens[parseInt(children)].cloneNode(true));
               }
            }
            document.body.appendChild(newCardList);
        })

};