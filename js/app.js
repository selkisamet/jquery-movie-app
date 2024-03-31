$(document).ready(function () {
    var apiKey = '91b5dbcc';
    var apiUrl = 'https://www.omdbapi.com/?apikey=' + apiKey;

    $('.search-result').hide(); // Sayfa ilk açıldığında divi gizle

    $('.input-search').on('input', function () {
        var searchQuery = $(this).val();
        if (searchQuery.length < 2) {
            $('.search-result').empty(); // Eğer arama kutusu 2 karakterden azsa, liste temizlenir
            $('.search-result').hide(); // Veri olmadığı için divi gizle
            return;
        }

        var fullUrl = apiUrl + '&s=' + searchQuery;

        $.ajax({
            url: fullUrl,
            type: 'GET',
            success: function (response) {
                if (response.Response === 'True') {
                    var movies = response.Search.slice(0, 2); // Sadece ilk 2 sonucu al
                    $('.search-result').empty(); // Önceki sonuçları temizle
                    movies.forEach(function (movie) {
                        var movieCard = `
                            <div class="movie-card">
                                <div class="image">
                                    <img src="${movie.Poster}" class="movie-image" alt="Film">
                                </div>
                                <div class="content">
                                    <header class="title">${movie.Title.replace(new RegExp(searchQuery, 'gi'), '<span class="high-light">$&</span>')} (${movie.Year})</header>
                                    <section class="info">
                                        <div class="row">
                                            <div class="feature">
                                                <span class="key">Dil:</span> ${movie.Language}
                                            </div>
                                            <div class="feature">
                                                <span class="key">Oyuncular:</span> ${movie.Actors} | <a href="#" class="link">Tüm Listeyi Gör</a>
                                            </div>
                                        </div>
                                        <div class="row">${movie.Plot} <a href="#" class="link">Detaylar</a></div>
                                    </section>
                                    <button class="btn-watch-later">Daha Sonra İzle</button>
                                </div>
                            </div>
                             <hr class="line">
                            `;
                        $('.search-result').append(movieCard);

                    });
                    $('.search-result').show(); // Veri olduğu için divi göster
                    $('.search-result').append(` <div class="more-results">
                                DAHA FAZLA SONUÇ
                            </div>`);
                } else {
                    console.log('Film bulunamadı.');
                    $('.search-result').empty(); // Önceki sonuçları temizle
                    $('.search-result').hide(); // Veri olmadığı için divi gizle
                }
            },
            error: function (err) {
                console.log('Hata oluştu: ', err);
                $('.search-result').empty(); // Önceki sonuçları temizle
                $('.search-result').hide(); // Veri olmadığı için divi gizle
            }
        });
    });
});
