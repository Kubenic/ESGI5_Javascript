export function generate(genres){
    let markup = ``;

    markup += `
    <ul class="genres-list">
    `;
    for(let genre of genres){
        markup += `<li>`;

        if(genre.active){
            markup += `<a class="active" href="/genre/${genre.id}">${genre.name}</a>`
        }else{
            markup += `<a href="/genre/${genre.id}">${genre.name}</a>`
        }

        markup +=`</li>`
    }
    markup += `
    </ul>
    `;
    return markup;
}