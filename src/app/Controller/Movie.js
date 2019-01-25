import APIHelper from '../Utils/APIHelper.js';

import * as HTMLMarkup from '../Templates/Movie.js';

export default class Movie {
    constructor() {

    }

    detailsById(id){
        APIHelper.details(id).then((value) => {
            APIHelper.movieVideos(id).then((videos) =>{
                console.log(videos);
                videos.results.map((video) => {
                   if(video.site === "YouTube"){
                       console.log("add endpoint");
                       video.endpoint = "https://www.youtube.com/watch?v="+video.key;
                   }
                });
                console.log(videos);
                document.body.innerHTML = HTMLMarkup.generate('','', value, videos.results[videos.results.length-1]);
            });

        });
    }
}