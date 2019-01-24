var markup = ``;

export function generate(body,footer,cards){
    markup +=`${body}`;
    for(let card in cards){
        markup += `<p>UNE CARTE</p>`
    }
    markup +=`${footer}`;
    return markup;
}


