$(document).ready(function () {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();

    var daysOfWeek = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];

    // Bu haftanın başlangıç gününü hesapla
    function getStartDay(date) {
        return date.getDay(); // Haftanın başlangıcı Pazar olduğu için sadece getDay() yeterli
    }

    // Calendarı render et
    function renderCalendar(date) {
        $('.days').empty();

        var startDay = getStartDay(date); // Bu haftanın başlangıç günü
        var selectedDayIndex = date.getDay(); // Seçili günün indeksi
        for (var i = selectedDayIndex; i < 7 + selectedDayIndex; i++) {
            var day = new Date(date.getFullYear(), date.getMonth(), date.getDate() - startDay + i);
            var className = 'day';
            if (day.getFullYear() === currentYear && day.getMonth() === currentMonth && day.getDate() === currentDay) {
                className += ' current';
            }
            $('.days').append('<div class="' + className + '">' + daysOfWeek[i % 7] + '<br>' + day.getDate() + '</div>');
        }

        $('.calendar-title').text(new Date(date.getFullYear(), date.getMonth(), date.getDate() - startDay + selectedDayIndex).toLocaleString('default', { month: 'long', year: 'numeric' }));
    }

    renderCalendar(currentDate);

    // Sayfa ilk açıldığında sadece bu haftanın gününü local storage'e ekleyin
    if (!localStorage.getItem('selectedDay')) {
        localStorage.setItem('selectedDay', currentDay);
    }

    $('.days').on('click', '.day', function () {
        // Tıklanan günü local storage'e ekleyin
        var selectedDay = $(this).text().trim().split('\n')[1];
        localStorage.setItem('selectedDay', selectedDay);
        $('.day.current').removeClass('current');
        $(this).addClass('current');
    });

    // Önceki haftaya git
    $('.prev').click(function () {
        currentDate.setDate(currentDate.getDate() - 7);
        renderCalendar(currentDate);
    });

    // Sonraki haftaya git
    $('.next').click(function () {
        currentDate.setDate(currentDate.getDate() + 7);
        renderCalendar(currentDate);
    });
});
