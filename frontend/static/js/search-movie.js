import MovieCardComponent from "./UI/movie-card-component.js";

class MovieSearch {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.apiUrl = "https://www.omdbapi.com/?apikey=" + this.apiKey;
        this.favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
        this.setup();
    }

    setup() {
        $(".search-result").hide();

        $(".input-search").on("input", () => this.searchMovies());
    }

    searchMovies() {
        let searchQuery = $(".input-search").val();
        localStorage.setItem("searchQuery", searchQuery);

        if (searchQuery.length < 2) {
            $(".search-result").empty();
            $(".search-result").hide();
            return;
        }

        let fullUrl = this.apiUrl + "&s=" + searchQuery;

        $.ajax({
            url: fullUrl,
            type: "GET",
            success: (response) => this.displayMovies(response, searchQuery),
            error: (err) => this.handleError(err)
        });
    }

    displayMovies(response, searchQuery) {
        if (response.Response === "True") {
            let movies = response.Search.slice(0, 2);
            $(".search-result").empty();

            movies.forEach((movie) => {
                let isFavorite = this.checkMovieFavorite(movie.imdbID);
                let movieCard = MovieCardComponent(movie, isFavorite, searchQuery);
                $(".search-result").append(movieCard);
            });

            $(".search-result").show();
            $(".search-result").append(` <a href="/search-results" class="more-results">DAHA FAZLA SONUÇ</a>`);
        } else {
            $(".search-result").empty();
            $(".search-result").hide();
        }
    }

    handleError(err) {
        console.log("Hata oluştu: ", err);
        $(".search-result").empty();
        $(".search-result").hide();
    }

    checkMovieFavorite(movieId) {
        return this.favoriteMovies.some(movie => movie.imdbID === movieId);
    }
}

$(document).ready(() => {
    const apiKey = "91b5dbcc";
    new MovieSearch(apiKey);
});
