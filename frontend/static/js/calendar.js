$(document).ready(function () {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();

    var daysOfWeek = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];

    function getStartDay(date) {
        return date.getDay();
    }

    function renderCalendar(date) {
        $('.days').empty();

        var startDay = getStartDay(date);
        var selectedDayIndex = date.getDay();
        for (var i = selectedDayIndex; i < 7 + selectedDayIndex; i++) {
            var day = new Date(date.getFullYear(), date.getMonth(), date.getDate() - startDay + i);
            var className = 'day';
            if (day.getFullYear() === currentYear && day.getMonth() === currentMonth && day.getDate() === currentDay) {
                className += ' current';
            }
            var dayElement = $('<div class="' + className + '">' + daysOfWeek[i % 7] + '<br>' + day.getDate() + '</div>');
            dayElement.data('date', day);
            $('.days').append(dayElement);
        }

        $('.calendar-title').text(new Date(date.getFullYear(), date.getMonth(), date.getDate() - startDay + selectedDayIndex).toLocaleString('default', { month: 'long', year: 'numeric' }));

        $('.day').click(function () {
            var clickedDay = $(this).data('date');
            $('.day.current').removeClass('current');
            $(this).addClass('current');

            var key = clickedDay.getDate() + '/' + (clickedDay.getMonth() + 1) + '/' + clickedDay.getFullYear();
            var storedMoviesForDay = localStorage.getItem(key);
            if (storedMoviesForDay) {
                var movies = JSON.parse(storedMoviesForDay);
                var movieList = $('<div class="movie-row"></div>');
                movies.map((value) => {
                    var movieItem = $(`
                    <div class="movie-item">
                        <div class="image-and-title"><img src="${value.Poster}" class="movie-image" /> ${value.Title}</div>
                        <img src="../../static/assets/icons/icon-trash.svg" class="icon-trash" data-movie-id="${value.imdbID}" />
                    </div>`);
                    movieList.append(movieItem);
                })
                $('.selected-movies').empty().append(movieList);
            } else {
                $('.selected-movies').empty();
            }
        });

    }

    renderCalendar(currentDate);

    if (!localStorage.getItem('selectedDay')) {
        localStorage.setItem('selectedDay', currentDay);
    }

    $('.prev').click(function () {
        currentDate.setDate(currentDate.getDate() - 7);
        renderCalendar(currentDate);
    });

    $('.next').click(function () {
        currentDate.setDate(currentDate.getDate() + 7);
        renderCalendar(currentDate);
    });

    $('.btn-add').click(function () {
        var selectedDay = $('.day.current').data('date');
        if (selectedDay) {
            var selectedMovie = JSON.parse(localStorage.getItem('selectedMovie'));
            if (selectedMovie) {
                var key = selectedDay.getDate() + '/' + (selectedDay.getMonth() + 1) + '/' + selectedDay.getFullYear();
                var moviesForDay = JSON.parse(localStorage.getItem(key)) || [];

                // Aynı film zaten eklenmişse ekleme
                var isMovieAlreadyAdded = moviesForDay.some(movie => movie.imdbID === selectedMovie.imdbID);
                if (!isMovieAlreadyAdded) {
                    moviesForDay.push(selectedMovie);
                    localStorage.setItem(key, JSON.stringify(moviesForDay));

                    // Anlık olarak .selected-movies içine eklenmesi
                    var movieList = $('<div class="movie-row"></div>');
                    moviesForDay.map((value) => {
                        var movieItem = $(`
                    <div class="movie-item">
                        <div class="image-and-title"><img src="${value.Poster}" class="movie-image" /> ${value.Title}</div>
                        <img src="../../static/assets/icons/icon-trash.svg" class="icon-trash" data-movie-id="${value.imdbID}" />
                    </div>`);
                        movieList.append(movieItem);
                    })
                    $('.selected-movies').empty().append(movieList);
                } else {
                    // Modalı göster
                    $('#modal').fadeIn();
                    // Modalı 2 saniye sonra gizle
                    setTimeout(function () {
                        $('#modal').fadeOut();
                    }, 1000);
                }
            }
        }
    });

    $('.selected-movies').on('click', '.icon-trash', function () {
        var movieId = $(this).attr('data-movie-id');
        var selectedDay = $('.day.current').data('date');
        if (selectedDay) {
            var key = selectedDay.getDate() + '/' + (selectedDay.getMonth() + 1) + '/' + selectedDay.getFullYear();
            var moviesForDay = JSON.parse(localStorage.getItem(key)) || [];
            var updatedMoviesForDay = moviesForDay.filter(movie => movie.imdbID !== movieId);
            localStorage.setItem(key, JSON.stringify(updatedMoviesForDay));

            // Update the movie list in the UI
            var movieList = $('<div class="movie-row"></div>');
            updatedMoviesForDay.map((value) => {
                var movieItem = $(`
    <div class="movie-item">
        <div class="image-and-title"><img src="${value.Poster}" class="movie-image" /> ${value.Title}</div>
        <img src="../../static/assets/icons/icon-trash.svg" class="icon-trash" />
    </div>`);
                movieList.append(movieItem);
            });
            $('.selected-movies').empty().append(movieList);
        }
    });

});
