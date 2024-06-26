/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/static/js/UI/movie-card-component.js":
/*!*******************************************************!*\
  !*** ./frontend/static/js/UI/movie-card-component.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst MovieCardComponent = (movie, isFavorite, searchQuery) => {\r\n    return `\r\n        <div class=\"movie-card\">\r\n            <div class=\"image\">\r\n                <img src=\"${movie.Poster}\" class=\"movie-image\" alt=\"Film\">\r\n            </div>\r\n            <div class=\"content\">\r\n                <header class=\"title\">\r\n                ${movie.Title.replace(new RegExp(searchQuery, \"gi\"), \"<span class='high-light'>$&</span>\")} (${movie.Year})\r\n                \r\n                <div class=\"rate-wrap\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 99.992 100\" class=\"icon-star ${isFavorite ? 'active' : ''}\" data-movie-id=\"${movie.imdbID}\" data-movie-title=\"${movie.Title}\" data-movie-poster=\"${movie.Poster}\">\r\n                        <g id=\"Favorite\" transform=\"translate(-0.999 -1)\">\r\n                            <path id=\"Path_1\" data-name=\"Path 1\" d=\"M100.649,33a2.915,2.915,0,0,0-3-2H67.658L54,3a3.2,3.2,0,0,0-3-2h0a3.2,3.2,0,0,0-3,2L34.334,31H4.342a2.914,2.914,0,0,0-3,2,3.043,3.043,0,0,0,.666,3.667L24,62,14.339,96.667a3.018,3.018,0,0,0,1,3.333,3.575,3.575,0,0,0,3.666.333L51,85l31.991,15.333c.333.667.666.667,1.333.667h0a3.34,3.34,0,0,0,3.332-3.333A3.006,3.006,0,0,0,87.319,96l-9.33-34.333L99.983,36.333A2.585,2.585,0,0,0,100.649,33Z\" />\r\n                        </g>\r\n                    </svg>\r\n\r\n                    <div class=\"rate\">\r\n                        <span class=\"current-point\">6.8</span>\r\n                        <span>/10</span>\r\n                    </div>\r\n                </div>\r\n                </header>\r\n\r\n                <section class=\"info\">\r\n                    <div class=\"row\">\r\n                        <div class=\"feature\">\r\n                            <span class=\"key\">Dil:</span> İngilizce\r\n                        </div>\r\n                        <div class=\"feature\">\r\n                            <span class=\"key\">Oyuncular:</span> Leonardo DiCaprio, Jake Gyllenhaal, Denzel Washington, Brad Pitt, Tom Cruise | <a href=\"#\" class=\"link\">Tüm Listeyi Gör</a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lorem dolor. Ut lacinia ornare consequat. Aenean euismod nibh in eleifend rutrum. <a href=\"#\" class=\"link\">Detaylar</a></div>\r\n                </section>\r\n                <button class=\"btn-watch-later\" data-movie-id=\"${movie.imdbID}\" data-movie-title=\"${movie.Title}\" data-movie-poster=\"${movie.Poster}\">Daha Sonra İzle</button>\r\n            </div>\r\n        </div>\r\n         <hr class=\"line\">\r\n        `;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieCardComponent);\n\n//# sourceURL=webpack://jquery-movie-app/./frontend/static/js/UI/movie-card-component.js?");

/***/ }),

/***/ "./frontend/static/js/calendar.js":
/*!****************************************!*\
  !*** ./frontend/static/js/calendar.js ***!
  \****************************************/
/***/ (() => {

eval("$(document).ready(function () {\r\n    var currentDate = new Date();\r\n    var currentYear = currentDate.getFullYear();\r\n    var currentMonth = currentDate.getMonth();\r\n    var currentDay = currentDate.getDate();\r\n\r\n    var daysOfWeek = [\"Paz\", \"Pzt\", \"Sal\", \"Çar\", \"Per\", \"Cum\", \"Cmt\"];\r\n\r\n    function getStartDay(date) {\r\n        return date.getDay();\r\n    }\r\n\r\n    function renderCalendar(date) {\r\n        $(\".days\").empty();\r\n\r\n        var startDay = getStartDay(date);\r\n        var selectedDayIndex = date.getDay();\r\n        for (var i = selectedDayIndex; i < 7 + selectedDayIndex; i++) {\r\n            var day = new Date(date.getFullYear(), date.getMonth(), date.getDate() - startDay + i);\r\n            var className = \"day\";\r\n            if (day.getFullYear() === currentYear && day.getMonth() === currentMonth && day.getDate() === currentDay) {\r\n                className += \" current\";\r\n            }\r\n            var dayElement = $(`<div class=\"${className}\"> ${daysOfWeek[i % 7]} <br> ${day.getDate()} </div>`);\r\n            dayElement.data(\"date\", day);\r\n            $('.days').append(dayElement);\r\n        }\r\n\r\n        $(\".calendar-title\").text(new Date(date.getFullYear(), date.getMonth(), date.getDate() - startDay + selectedDayIndex).toLocaleString(\"default\", { month: \"long\", year: \"numeric\" }));\r\n\r\n        $(\".day\").click(function () {\r\n            var clickedDay = $(this).data(\"date\");\r\n            $(\".day.current\").removeClass(\"current\");\r\n            $(this).addClass(\"current\");\r\n\r\n            var key = clickedDay.getDate() + \"/\" + (clickedDay.getMonth() + 1) + \"/\" + clickedDay.getFullYear();\r\n            var storedMoviesForDay = localStorage.getItem(key);\r\n            if (storedMoviesForDay) {\r\n                var movies = JSON.parse(storedMoviesForDay);\r\n                var movieList = $(\"<div class='movie-row'></div>\");\r\n                movies.map((value) => {\r\n                    var movieItem = $(`\r\n                    <div class=\"movie-item\">\r\n                        <div class=\"image-and-title\"><img src=\"${value.Poster}\" class=\"movie-image\" /> ${value.Title}</div>\r\n                        <img src=\"../../static/assets/icons/icon-trash.svg\" class=\"icon-trash\" data-movie-id=\"${value.imdbID}\" />\r\n                    </div>`);\r\n                    movieList.append(movieItem);\r\n                })\r\n                $(\".selected-movies\").empty().append(movieList);\r\n            } else {\r\n                $(\".selected-movies\").empty();\r\n            }\r\n        });\r\n\r\n    }\r\n\r\n    renderCalendar(currentDate);\r\n\r\n    if (!localStorage.getItem(\"selectedDay\")) {\r\n        localStorage.setItem(\"selectedDay\", currentDay);\r\n    }\r\n\r\n    $(\".prev\").click(function () {\r\n        currentDate.setDate(currentDate.getDate() - 7);\r\n        renderCalendar(currentDate);\r\n    });\r\n\r\n    $(\".next\").click(function () {\r\n        currentDate.setDate(currentDate.getDate() + 7);\r\n        renderCalendar(currentDate);\r\n    });\r\n\r\n    $(\".btn-add\").click(function () {\r\n        var selectedDay = $(\".day.current\").data(\"date\");\r\n        if (selectedDay) {\r\n            var selectedMovie = JSON.parse(localStorage.getItem(\"selectedMovie\"));\r\n            if (selectedMovie) {\r\n                var key = selectedDay.getDate() + \"/\" + (selectedDay.getMonth() + 1) + \"/\" + selectedDay.getFullYear();\r\n                var moviesForDay = JSON.parse(localStorage.getItem(key)) || [];\r\n\r\n                // Aynı film zaten eklenmişse ekleme\r\n                var isMovieAlreadyAdded = moviesForDay.some(movie => movie.imdbID === selectedMovie.imdbID);\r\n                if (!isMovieAlreadyAdded) {\r\n                    moviesForDay.push(selectedMovie);\r\n                    localStorage.setItem(key, JSON.stringify(moviesForDay));\r\n\r\n                    // Anlık olarak .selected-movies içine eklenmesi\r\n                    var movieList = $(\"<div class='movie-row'></div>\");\r\n                    moviesForDay.map((value) => {\r\n                        var movieItem = $(`\r\n                    <div class=\"movie-item\">\r\n                        <div class=\"image-and-title\"><img src=\"${value.Poster}\" class=\"movie-image\" /> ${value.Title}</div>\r\n                        <img src=\"../../static/assets/icons/icon-trash.svg\" class=\"icon-trash\" data-movie-id=\"${value.imdbID}\" />\r\n                    </div>`);\r\n                        movieList.append(movieItem);\r\n                    })\r\n                    $(\".selected-movies\").empty().append(movieList);\r\n                } else {\r\n                    // Modalı göster\r\n                    $(\".calendar-modal\").fadeIn();\r\n                    // Modalı 2 saniye sonra gizle\r\n                    setTimeout(function () {\r\n                        $(\".calendar-modal\").fadeOut();\r\n                    }, 1000);\r\n                }\r\n            }\r\n        }\r\n    });\r\n    $(\".selected-movies\").on(\"click\", \".icon-trash\", function () {\r\n        var movieId = $(this).attr(\"data-movie-id\");\r\n        var selectedDay = $(\".day.current\").data(\"date\");\r\n        if (selectedDay) {\r\n            var key = selectedDay.getDate() + \"/\" + (selectedDay.getMonth() + 1) + \"/\" + selectedDay.getFullYear();\r\n            var moviesForDay = JSON.parse(localStorage.getItem(key)) || [];\r\n            var updatedMoviesForDay = moviesForDay.filter(movie => movie.imdbID !== movieId);\r\n            localStorage.setItem(key, JSON.stringify(updatedMoviesForDay));\r\n\r\n            // Update the movie list in the UI\r\n            var movieList = $(\"<div class='movie-row'></div>\");\r\n            updatedMoviesForDay.map((value) => {\r\n                var movieItem = $(`\r\n                <div class=\"movie-item\">\r\n                    <div class=\"image-and-title\"><img src=\"${value.Poster}\" class=\"movie-image\" /> ${value.Title}</div>\r\n                    <img src=\"../../static/assets/icons/icon-trash.svg\" class=\"icon-trash\" data-movie-id=\"${value.imdbID}\" />\r\n                </div>`);\r\n                movieList.append(movieItem);\r\n            });\r\n            $(\".selected-movies\").empty().append(movieList);\r\n\r\n            // Eğer son filmi siliyorsak, '.selected-movies' içeriğini boşalt\r\n            if (updatedMoviesForDay.length === 0) {\r\n                $(\".selected-movies\").empty();\r\n            }\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://jquery-movie-app/./frontend/static/js/calendar.js?");

/***/ }),

/***/ "./frontend/static/js/favorites.js":
/*!*****************************************!*\
  !*** ./frontend/static/js/favorites.js ***!
  \*****************************************/
/***/ (() => {

eval("$(document).ready(function () {\r\n    let updateFavoriteCount = function () {\r\n        let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];\r\n        $(\".favorite-count\").text(favoriteMovies.length);\r\n\r\n        // dropdown-content içindeki eski içeriği temizle\r\n        $(\".dropdown-content\").empty();\r\n\r\n        // favori filmleri dropdown-content içine ekleyin\r\n        favoriteMovies.forEach((movie) => {\r\n            $(\".dropdown-content\").append(`<div class=\"favorite-item\">\r\n                    <img src=\"${movie.Poster}\" alt=\"Film\" class=\"favorite-image\">\r\n                    <div class=\"favorite-title\">${movie.Title}</div>\r\n            </div>`);\r\n        });\r\n    };\r\n\r\n    // İlk çalıştırma\r\n    updateFavoriteCount();\r\n\r\n    $(document).on(\"click\", \".icon-star\", function () {\r\n\r\n        setTimeout(function () {\r\n            updateFavoriteCount();\r\n        }, 200);\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://jquery-movie-app/./frontend/static/js/favorites.js?");

/***/ }),

/***/ "./frontend/static/js/index.js":
/*!*************************************!*\
  !*** ./frontend/static/js/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/Home.js */ \"./frontend/static/js/views/Home.js\");\n/* harmony import */ var _views_SearchResults_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/SearchResults.js */ \"./frontend/static/js/views/SearchResults.js\");\n/* harmony import */ var _calendar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.js */ \"./frontend/static/js/calendar.js\");\n/* harmony import */ var _calendar_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_calendar_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _favorites_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorites.js */ \"./frontend/static/js/favorites.js\");\n/* harmony import */ var _favorites_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_favorites_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _movie_results_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-results.js */ \"./frontend/static/js/movie-results.js\");\n/* harmony import */ var _movie_results_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_movie_results_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _search_movie_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-movie.js */ \"./frontend/static/js/search-movie.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst pathToRegex = path => new RegExp(\"^\" + path.replace(/\\//g, \"\\\\/\").replace(/:\\w+/g, \"(.+)\") + \"$\");\r\n\r\nconst getParams = match => {\r\n    const values = match.result.slice(1);\r\n    const keys = Array.from(match.route.path.matchAll(/:(\\w+)/g)).map(result => result[1]);\r\n\r\n    return Object.fromEntries(keys.map((key, i) => {\r\n        return [key, values[i]];\r\n    }));\r\n};\r\n\r\nconst navigateTo = url => {\r\n    history.pushState(null, null, url);\r\n    router();\r\n};\r\n\r\nconst router = async () => {\r\n    const routes = [\r\n        { path: \"/\", view: _views_Home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] },\r\n        { path: \"/search-results\", view: _views_SearchResults_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] },\r\n    ];\r\n\r\n    // Test each route for potential match\r\n    const potentialMatches = routes.map(route => {\r\n        return {\r\n            route: route,\r\n            result: location.pathname.match(pathToRegex(route.path))\r\n        };\r\n    });\r\n\r\n    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);\r\n\r\n    if (!match) {\r\n        match = {\r\n            route: routes[0],\r\n            result: [location.pathname]\r\n        };\r\n    }\r\n\r\n    const view = new match.route.view(getParams(match));\r\n\r\n    document.querySelector(\"#app\").innerHTML = await view.getHtml();\r\n};\r\n\r\nwindow.addEventListener(\"popstate\", router);\r\n\r\nwindow.onpopstate = function () {\r\n    $(\".input-search\").val(\"\"); // Input değerini temizle\r\n    $(\".search-result\").empty(); // Arama sonuçlarını temizle\r\n    $(\".search-result\").hide(); // Arama sonuçlarını gizle\r\n};\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    document.body.addEventListener(\"click\", e => {\r\n        if (e.target.matches(\"[data-link]\")) {\r\n            e.preventDefault();\r\n            navigateTo(e.target.href);\r\n        }\r\n    });\r\n\r\n    router();\r\n\r\n    $(document).on(\"click\", \".btn-watch-later\", function () {\r\n        $(\".modal-overlay\").addClass(\"active\");\r\n    });\r\n\r\n    $(\".btn-close\").on(\"click\", function () {\r\n        $(\".modal-overlay\").removeClass(\"active\");\r\n    });\r\n\r\n    // Çerez kabul işlemini kontrol et\r\n    let cookieAccepted = getCookie(\"cookieStatus\");\r\n    if (cookieAccepted === \"true\") {\r\n        // Eğer çerez kabul edildiyse, mesajı gizle\r\n        $(\"#cookie-overlay\").hide();\r\n    }\r\n\r\n    // Kabul et butonuna tıklama işlemi\r\n    $(\".btn-accept\").click(function () {\r\n        setCookie(\"cookieStatus\", \"true\", 365); // 1 yıl boyunca geçerli bir çerez oluştur\r\n        $(\"#cookie-overlay\").hide(); // Mesajı gizle\r\n    });\r\n\r\n    // Reddet butonuna tıklama işlemi\r\n    $(\".btn-reject\").click(function () {\r\n        $(\"#cookie-overlay\").hide(); // Mesajı gizle\r\n    });\r\n\r\n    // Çerez oluşturma fonksiyonu\r\n    function setCookie(name, value, days) {\r\n        let expires = \"\";\r\n        if (days) {\r\n            let date = new Date();\r\n            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));\r\n            expires = \"; expires=\" + date.toUTCString();\r\n        }\r\n        document.cookie = name + \"=\" + (value || \"\") + expires + \"; path=/\";\r\n    }\r\n\r\n    // Çerez okuma fonksiyonu\r\n    function getCookie(name) {\r\n        let nameEQ = name + \"=\";\r\n        let ca = document.cookie.split(\";\");\r\n        for (let i = 0; i < ca.length; i++) {\r\n            let c = ca[i];\r\n            while (c.charAt(0) === \" \") c = c.substring(1, c.length);\r\n            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);\r\n        }\r\n        return null;\r\n    }\r\n});\n\n//# sourceURL=webpack://jquery-movie-app/./frontend/static/js/index.js?");

/***/ }),

/***/ "./frontend/static/js/movie-results.js":
/*!*********************************************!*\
  !*** ./frontend/static/js/movie-results.js ***!
  \*********************************************/
/***/ (() => {

eval("$(document).ready(function () {\r\n    let apiKey = \"91b5dbcc\";\r\n    let apiUrl = \"https://www.omdbapi.com/?apikey=\" + apiKey;\r\n\r\n    const searchQuery = localStorage.getItem('searchQuery');\r\n\r\n    let fullUrl = apiUrl + \"&s=\" + searchQuery;\r\n\r\n    function checkMovieFavorite(movieId) {\r\n        let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];\r\n        return favoriteMovies.some(movie => movie.imdbID === movieId);\r\n    }\r\n\r\n    function toggleMovieFavorite(movie) {\r\n        let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];\r\n        let index = favoriteMovies.findIndex(m => m.imdbID === movie.imdbID);\r\n        if (index === -1) {\r\n            favoriteMovies.push(movie);\r\n        } else {\r\n            favoriteMovies.splice(index, 1);\r\n        }\r\n        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));\r\n    }\r\n\r\n    if (searchQuery) {\r\n        $.ajax({\r\n            url: fullUrl,\r\n            type: \"GET\",\r\n            success: function (response) {\r\n                $(\".result-count\").text(response.totalResults + \" Sonuç Bulundu\");\r\n                if (response.Response === \"True\") {\r\n                    $(\".result-title\").text(\"Arama Sonuçları: \" + searchQuery);\r\n                    let totalResults = parseInt(response.totalResults);\r\n                    let totalPages = Math.ceil(totalResults / 10);\r\n\r\n                    for (let i = 1; i <= totalPages; i++) {\r\n                        let pageUrl = fullUrl + \"&page=\" + i;\r\n\r\n                        $.ajax({\r\n                            url: pageUrl,\r\n                            type: \"GET\",\r\n                            success: function (pageResponse) {\r\n                                let movies = pageResponse.Search;\r\n\r\n                                movies.forEach(function (movie) {\r\n                                    let isFavorite = checkMovieFavorite(movie.imdbID);\r\n                                    let movieCard = `\r\n                                    <div class=\"movie-card\">\r\n                                        <div class=\"image\">\r\n                                            <img src=\"${movie.Poster}\" class=\"movie-image\" alt=\"Film\">\r\n                                        </div>\r\n                                        <div class=\"content\">\r\n                                            <header class=\"title\">\r\n                                            ${movie.Title.replace(new RegExp(searchQuery, \"gi\"), \"<span class='high-light'>$&</span>\")} (${movie.Year})\r\n\r\n                                             <div class=\"rate-wrap\">\r\n                                               <div>\r\n                                                <svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 99.992 100\" class=\"icon-star ${isFavorite ? 'active' : ''}\" data-movie-id=\"${movie.imdbID}\" data-movie-title=\"${movie.Title}\" data-movie-poster=\"${movie.Poster}\">\r\n                                                    <g id=\"Favorite\" transform=\"translate(-0.999 -1)\">\r\n                                                        <path id=\"Path_1\" data-name=\"Path 1\" d=\"M100.649,33a2.915,2.915,0,0,0-3-2H67.658L54,3a3.2,3.2,0,0,0-3-2h0a3.2,3.2,0,0,0-3,2L34.334,31H4.342a2.914,2.914,0,0,0-3,2,3.043,3.043,0,0,0,.666,3.667L24,62,14.339,96.667a3.018,3.018,0,0,0,1,3.333,3.575,3.575,0,0,0,3.666.333L51,85l31.991,15.333c.333.667.666.667,1.333.667h0a3.34,3.34,0,0,0,3.332-3.333A3.006,3.006,0,0,0,87.319,96l-9.33-34.333L99.983,36.333A2.585,2.585,0,0,0,100.649,33Z\" />\r\n                                                    </g>\r\n                                                </svg>\r\n                                               </div>\r\n\r\n                                                <div class=\"rate\">\r\n                                                    <span class=\"current-point\">6.8</span>\r\n                                                    <span>/10</span>\r\n                                                </div>\r\n                                            </div>\r\n                                            </header>\r\n                                            \r\n                                            <section class=\"info\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"feature\">\r\n                                                        <span class=\"key\">Dil:</span> İngilizce\r\n                                                    </div>\r\n                                                    <div class=\"feature\">\r\n                                                        <span class=\"key\">Oyuncular:</span> Leonardo DiCaprio, Jake Gyllenhaal, Denzel Washington, Brad Pitt, Tom Cruise | <a href=\"#\" class=\"link\">Tüm Listeyi Gör</a>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lorem dolor. Ut lacinia ornare consequat. Aenean euismod nibh in eleifend rutrum. <a href=\"#\" class=\"link\">Detaylar</a></div>\r\n                                            </section>\r\n                                            <button class=\"btn-watch-later\" data-movie-id=\"${movie.imdbID}\" data-movie-title=\"${movie.Title}\" data-movie-poster=\"${movie.Poster}\">Daha Sonra İzle</button>\r\n                                        </div>\r\n                                    </div>\r\n                                `;\r\n                                    $(\".movie-results\").append(movieCard);\r\n                                });\r\n                            },\r\n                            error: function (err) {\r\n                                console.log(\"Sayfa bilgileri alınamadı: \", err);\r\n                            }\r\n                        });\r\n                    }\r\n                }\r\n            },\r\n            error: function (err) {\r\n                console.log(\"Hata oluştu: \", err);\r\n            }\r\n        });\r\n    }\r\n    else {\r\n        $(\".movie-results\").append(`<h1>ARAMA YAPMADINIZ</h1> <br> <h2><a href='/'>Arama Sayfasına Dön</a><h2>`);\r\n    }\r\n\r\n    $(document).on(\"click\", \".icon-star\", function () {\r\n        let movie = {\r\n            imdbID: $(this).data(\"movie-id\"),\r\n            Title: $(this).data(\"movie-title\"),\r\n            Poster: $(this).data(\"movie-poster\")\r\n        };\r\n        toggleMovieFavorite(movie);\r\n        $(this).toggleClass(\"active\");\r\n    });\r\n\r\n    $(document).on(\"click\", \".btn-watch-later\", function () {\r\n        $(\".modal-overlay\").addClass(\"active\");\r\n        localStorage.setItem(\"selectedMovie\", JSON.stringify({\r\n            imdbID: $(this).data(\"movie-id\"),\r\n            Title: $(this).data(\"movie-title\"),\r\n            Poster: $(this).data(\"movie-poster\")\r\n        }));\r\n    });\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://jquery-movie-app/./frontend/static/js/movie-results.js?");

/***/ }),

/***/ "./frontend/static/js/search-movie.js":
/*!********************************************!*\
  !*** ./frontend/static/js/search-movie.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_movie_card_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/movie-card-component.js */ \"./frontend/static/js/UI/movie-card-component.js\");\n\r\n\r\nclass MovieSearch {\r\n    constructor(apiKey) {\r\n        this.apiKey = apiKey;\r\n        this.apiUrl = \"https://www.omdbapi.com/?apikey=\" + this.apiKey;\r\n        this.favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];\r\n        this.setup();\r\n    }\r\n\r\n    setup() {\r\n        $(\".search-result\").hide();\r\n\r\n        $(\".input-search\").on(\"input\", () => this.searchMovies());\r\n    }\r\n\r\n    searchMovies() {\r\n        let searchQuery = $(\".input-search\").val();\r\n        localStorage.setItem(\"searchQuery\", searchQuery);\r\n\r\n        if (searchQuery.length < 2) {\r\n            $(\".search-result\").empty();\r\n            $(\".search-result\").hide();\r\n            return;\r\n        }\r\n\r\n        let fullUrl = this.apiUrl + \"&s=\" + searchQuery;\r\n\r\n        $.ajax({\r\n            url: fullUrl,\r\n            type: \"GET\",\r\n            success: (response) => this.displayMovies(response, searchQuery),\r\n            error: (err) => this.handleError(err)\r\n        });\r\n    }\r\n\r\n    displayMovies(response, searchQuery) {\r\n        if (response.Response === \"True\") {\r\n            let movies = response.Search.slice(0, 2);\r\n            $(\".search-result\").empty();\r\n\r\n            movies.forEach((movie) => {\r\n                let isFavorite = this.checkMovieFavorite(movie.imdbID);\r\n                let movieCard = (0,_UI_movie_card_component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(movie, isFavorite, searchQuery);\r\n                $(\".search-result\").append(movieCard);\r\n            });\r\n\r\n            $(\".search-result\").show();\r\n            $(\".search-result\").append(` <a href=\"/search-results\" class=\"more-results\">DAHA FAZLA SONUÇ</a>`);\r\n        } else {\r\n            $(\".search-result\").empty();\r\n            $(\".search-result\").hide();\r\n        }\r\n    }\r\n\r\n    handleError(err) {\r\n        console.log(\"Hata oluştu: \", err);\r\n        $(\".search-result\").empty();\r\n        $(\".search-result\").hide();\r\n    }\r\n\r\n    checkMovieFavorite(movieId) {\r\n        return this.favoriteMovies.some(movie => movie.imdbID === movieId);\r\n    }\r\n}\r\n\r\n$(document).ready(() => {\r\n    const apiKey = \"91b5dbcc\";\r\n    new MovieSearch(apiKey);\r\n});\r\n\n\n//# sourceURL=webpack://jquery-movie-app/./frontend/static/js/search-movie.js?");

/***/ }),

/***/ "./frontend/static/js/views/AbstractView.js":
/*!**************************************************!*\
  !*** ./frontend/static/js/views/AbstractView.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\r\n    constructor(params) {\r\n        this.params = params;\r\n    }\r\n\r\n    setTitle(title) {\r\n        document.title = title;\r\n    }\r\n\r\n    async getHtml() {\r\n        return \"\";\r\n    }\r\n});\n\n//# sourceURL=webpack://jquery-movie-app/./frontend/static/js/views/AbstractView.js?");

/***/ }),

/***/ "./frontend/static/js/views/Home.js":
/*!******************************************!*\
  !*** ./frontend/static/js/views/Home.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractView.js */ \"./frontend/static/js/views/AbstractView.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor(params) {\r\n        super(params);\r\n        this.setTitle(\"Home\");\r\n    }\r\n\r\n    async getHtml() {\r\n        return `\r\n            <div class=\"container\">\r\n                <div class=\"search-wrap\">\r\n                    <div class=\"search\">\r\n                        <div class=\"input-wrap\">\r\n                            <input type=\"text\" class=\"input-search\"\r\n                                placeholder=\"Bulmak istediğiniz filmin adını yazınız.\" autofocus>\r\n                                <img src=\"static/assets/icons/icon-search.svg\" class=\"icon-search\" alt=\"Ara\">\r\n                                </div>\r\n\r\n                                <div class=\"search-result\">\r\n                                </div>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n        `;\r\n    }\r\n});\n\n//# sourceURL=webpack://jquery-movie-app/./frontend/static/js/views/Home.js?");

/***/ }),

/***/ "./frontend/static/js/views/SearchResults.js":
/*!***************************************************!*\
  !*** ./frontend/static/js/views/SearchResults.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractView.js */ \"./frontend/static/js/views/AbstractView.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(params) {\r\n        super(params);\r\n        this.setTitle(\"Search Results\");\r\n    }\r\n\r\n    async getHtml() {\r\n        return `\r\n            <div class=\"container\">\r\n                <div class=\"list-wrap\">\r\n                    <header class=\"result-header\">\r\n                        <div class=\"result-title\"></div>\r\n                        <div class=\"result-count\"></div>\r\n                    </header>\r\n\r\n                    <div class=\"movie-results\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        `;\r\n    }\r\n});\n\n//# sourceURL=webpack://jquery-movie-app/./frontend/static/js/views/SearchResults.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/static/js/index.js");
/******/ 	
/******/ })()
;