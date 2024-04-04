const MovieCardComponent = (movie, isFavorite, searchQuery) => {
    return `
        <div class="movie-card">
            <div class="image">
                <img src="${movie.Poster}" class="movie-image" alt="Film">
            </div>
            <div class="content">
                <header class="title">
                ${movie.Title.replace(new RegExp(searchQuery, "gi"), "<span class='high-light'>$&</span>")} (${movie.Year})
                
                <div class="rate-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.992 100" class="icon-star ${isFavorite ? 'active' : ''}" data-movie-id="${movie.imdbID}" data-movie-title="${movie.Title}" data-movie-poster="${movie.Poster}">
                        <g id="Favorite" transform="translate(-0.999 -1)">
                            <path id="Path_1" data-name="Path 1" d="M100.649,33a2.915,2.915,0,0,0-3-2H67.658L54,3a3.2,3.2,0,0,0-3-2h0a3.2,3.2,0,0,0-3,2L34.334,31H4.342a2.914,2.914,0,0,0-3,2,3.043,3.043,0,0,0,.666,3.667L24,62,14.339,96.667a3.018,3.018,0,0,0,1,3.333,3.575,3.575,0,0,0,3.666.333L51,85l31.991,15.333c.333.667.666.667,1.333.667h0a3.34,3.34,0,0,0,3.332-3.333A3.006,3.006,0,0,0,87.319,96l-9.33-34.333L99.983,36.333A2.585,2.585,0,0,0,100.649,33Z" />
                        </g>
                    </svg>

                    <div class="rate">
                        <span class="current-point">6.8</span>
                        <span>/10</span>
                    </div>
                </div>
                </header>

                <section class="info">
                    <div class="row">
                        <div class="feature">
                            <span class="key">Dil:</span> İngilizce
                        </div>
                        <div class="feature">
                            <span class="key">Oyuncular:</span> Leonardo DiCaprio, Jake Gyllenhaal, Denzel Washington, Brad Pitt, Tom Cruise | <a href="#" class="link">Tüm Listeyi Gör</a>
                        </div>
                    </div>
                    <div class="row"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lorem dolor. Ut lacinia ornare consequat. Aenean euismod nibh in eleifend rutrum. <a href="#" class="link">Detaylar</a></div>
                </section>
                <button class="btn-watch-later" data-movie-id="${movie.imdbID}" data-movie-title="${movie.Title}" data-movie-poster="${movie.Poster}">Daha Sonra İzle</button>
            </div>
        </div>
         <hr class="line">
        `;
}

export default MovieCardComponent;