

export function generate(cards){
    let markup = ``;
    for(let card in cards){
        markup += `
        <div class="movie-card" style="background-image: url(https://image.tmdb.org/t/p/w500${(cards[card].backdrop_path !== null) ? cards[card].backdrop_path : cards[card].poster_path})">
            <div class="movie-card__overlay"></div>
            <div class="movie-card__share">
            <button class="movie-card__icon"><i class="material-icons">&#xe87d</i></button>
        <button class="movie-card__icon"><i class="material-icons">&#xe253</i></button>
        <button class="movie-card__icon"><i class="material-icons">&#xe80d</i></button>
        </div>
        <div class="movie-card__content">
            <div class="movie-card__header">
            <h1 class="movie-card__title">${cards[card].title}</h1>
        <h4 class="movie-card__info">${cards[card].release_date}</h4>
        </div>
        <p class="movie-card__desc">${(cards[card].overview !== "") ? cards[card].overview : "Pas de description"}</p>
        <a class="btn btn-outline movie-card__button" type="button" href="/movie/${cards[card].id}">Voir les détails</a>
        </div>
        </div>`;
    }

    return markup;
}




