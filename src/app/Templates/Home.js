import * as CardPartHTMLMarkup from './Parts/Card.js';
import * as GenreListPartHTMLMarkup from './Parts/GenreList.js';


export function generate(body,footer,cards,genres){
    let markup = ``;
    markup +=`${body}`;
    markup +=`<div class="wrap">
                    <div class="search">
                      <input type="search" class="search-box" id="search-box" />
                      <span class="search-button" id="search-button">
                        <span class="search-icon"></span>
                      </span>
                    </div>
                </div>`;

    markup += GenreListPartHTMLMarkup.generate(genres);
    markup +=`<div id="movie-card-list">`;
    markup += CardPartHTMLMarkup.generate(cards);

    markup += `</div>`;

    markup +=`${footer}`;
    return markup;
}


