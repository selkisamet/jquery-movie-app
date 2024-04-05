$(document).ready(function () {
    let updateFavoriteCount = function () {
        let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
        $(".favorite-count").text(favoriteMovies.length);

        // dropdown-content içindeki eski içeriği temizle
        $(".dropdown-content").empty();

        // favori filmleri dropdown-content içine ekleyin
        favoriteMovies.forEach((movie) => {
            $(".dropdown-content").append(`<div class="favorite-item">
                    <img src="${movie.Poster}" alt="Film" class="favorite-image">
                    <div class="favorite-title">${movie.Title}</div>
            </div>`);
        });
    };

    // İlk çalıştırma
    updateFavoriteCount();

    $(document).on("click", ".icon-star", function () {

        setTimeout(function () {
            updateFavoriteCount();
        }, 200);
    });
});
