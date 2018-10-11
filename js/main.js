$(document).ready(function () {
    $('#1').on('click', function () {
        $("#headerPicture").attr('src', "img/garden.jpeg");
    });

    $('#2').on('click', function () {
        $("#headerPicture").attr('src', "img/headshot.jpg");
    });

    $('#3').on('click', function () {
        $("#headerPicture").attr('src', "img/jump.jpg");
    });

    $('#4').on('click', function () {
        $("#headerPicture").attr('src', "img/computer.jpg");
    });


});



var showText = function (target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
}

$(function () {
    showText("#headerName", "elizabeth callam", 0, 150);

        });
