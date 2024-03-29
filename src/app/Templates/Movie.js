

export function generate(body,footer,details,video){
    let markup = ``;
    markup +=`${body}`;

    markup +=`<div id="movie-card-list">`;
    markup +=`<a id="back-to-home" href="/"> <i class="material-icons">keyboard_arrow_left</i> <span>Revenir à l'accueil</span></a>`;
    markup += `
    <style>.hero:before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        z-index: -1;
        background: url(https://image.tmdb.org/t/p/w780${details.backdrop_path}) #000000;
        -webkit-transform: skewY(-2.2deg);
                transform: skewY(-2.2deg);
        -webkit-transform-origin: 0 0;
                transform-origin: 0 0;
        -webkit-backface-visibility: hidden;
    }</style>
    <div class="movie-details">
  
  <div class="container">`;
    if(typeof(video) !== "undefined"){
        markup +=`<a target="_blank" href="${(video.endpoint) ? video.endpoint:""}"><img src="https://image.tmdb.org/t/p/w500${details.poster_path}" alt="cover" class="cover" /></a>`;
    }else{
        markup +=`<a href="#"><img src="https://image.tmdb.org/t/p/w500${details.poster_path}" alt="cover" class="cover" /></a>`;

    }
   markup += `     
    <div class="hero">
            
      <div class="details">
      
        <div class="title1">${details.title} <span>${details.adult ? 'Adulte' : 'Tout public'}</span></div> 
        
        <fieldset class="rating">
            ${Array(Math.round(details.vote_average / 2)).join(0).split(0).map(() => `
                <i class="material-icons fav">favorite</i>
            `).join('')}
            ${Array(Math.round(5 - (details.vote_average / 2))).join(0).split(0).map(() => `
                <i class="material-icons fav">favorite_border</i>
            `).join('')}
        </fieldset>
        <span class="likes">${details.vote_count} votes</span>
        
      </div>
      
    </div>
    
    <div class="description">
      
      <div class="column1">
        ${details.genres.map((item) => `
            <span class="tag">${item.name}</span>
        `).join('')}
      </div>
      
      <div class="column2">
        
        <p>${(details.overview !== "") ? details.overview : "Pas de description"}</p>
        <a href="#"> Voir plus</a>
      </div>
    </div> 
    
   
  </div>
</div>`

    markup += `</div>`;
    markup +=`${footer}`;
    return markup;
}


