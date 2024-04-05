import Home from "./views/Home.js";
import SearchResults from "./views/SearchResults.js";
import "./calendar.js";
import "./favorites.js";
import "./movie-results.js";
import "./search-movie.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/search-results", view: SearchResults },
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

window.onpopstate = function () {
    $(".input-search").val(""); // Input değerini temizle
    $(".search-result").empty(); // Arama sonuçlarını temizle
    $(".search-result").hide(); // Arama sonuçlarını gizle
};

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();

    $(document).on("click", ".btn-watch-later", function () {
        $(".modal-overlay").addClass("active");
    });

    $(".btn-close").on("click", function () {
        $(".modal-overlay").removeClass("active");
    });

    // Çerez kabul işlemini kontrol et
    let cookieAccepted = getCookie("cookieStatus");
    if (cookieAccepted === "true") {
        // Eğer çerez kabul edildiyse, mesajı gizle
        $("#cookie-overlay").hide();
    }

    // Kabul et butonuna tıklama işlemi
    $(".btn-accept").click(function () {
        setCookie("cookieStatus", "true", 365); // 1 yıl boyunca geçerli bir çerez oluştur
        $("#cookie-overlay").hide(); // Mesajı gizle
    });

    // Reddet butonuna tıklama işlemi
    $(".btn-reject").click(function () {
        $("#cookie-overlay").hide(); // Mesajı gizle
    });

    // Çerez oluşturma fonksiyonu
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Çerez okuma fonksiyonu
    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
});