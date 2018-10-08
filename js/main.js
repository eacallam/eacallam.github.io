$(document).ready(function () {
    $('#1').on('click', function () {
        $("#headerPicture").attr('src', "img/mainPicture.png");
    });

    $('#2').on('click', function () {
        $("#headerPicture").attr('src', "img/karaokePicture.png");
    });

    // $('#3').on('click', function () {
    //     $("#headerPicture").attr('src', "img/jPicture.png");
    // });

    $('#3').on('click', function () {
        $("#headerPicture").attr('src', "img/youngElizabeth.png");
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
