$(document).ready(function() {

    // https: //us6.list-manage.com/contact-form?u=f36c8b7eb4f029fbe963acd76&form_id=86b35d451b340ddc10e02fc2e237b7be
    $(".social-text").hide();
    $(".social").click(function() {
        $(".social-text").hide();
        $("#div" + $(this).attr('target')).show();
    });
    $(".designtoggle").click(function() {
        $(this).find('.card-a').toggle();
    });
    $(".devtoggle").click(function() {
        $(this).find('.card-a').toggle();
    });
    $(".prodtoggle").click(function() {
        $(this).find('.card-a').toggle();
    });

    $("#work1").mouseover(function() {
        $('#overlay').show();

    }).mouseout(function() {
        $('#overlay').hide();
    });
    $("#work2").mouseover(function() {
        $('#overlay1').show();

    }).mouseout(function() {
        $('#overlay1').hide();
    });

    $("#work3").mouseover(function() {
        $('#overlay2').show();

    }).mouseout(function() {
        $('#overlay2').hide();
    });
    $("#work4").mouseover(function() {
        $('#overlay3').show();

    }).mouseout(function() {
        $('#overlay3').hide();
    });
    $("#work5").mouseover(function() {
        $('#overlay4').show();

    }).mouseout(function() {
        $('#overlay4').hide();
    });
    $("#work6").mouseover(function() {
        $('#overlay5').show();

    }).mouseout(function() {
        $('#overlay5').hide();
    });
    $("#work7").mouseover(function() {
        $('#overlay6').show();

    }).mouseout(function() {
        $('#overlay6').hide();
    });
    $("#work8").mouseover(function() {
        $('#overlay7').show();

    }).mouseout(function() {
        $('#overlay7').hide();
    });

    $("#mc-embedded-subscribe").click(function(event) {
        // $("form").submit(function(event) {

        var nameInput = $('input#mce-FNAME').val();
        var emailInput = $('input#mce-EMAIL').val();
        if ((nameInput !== "") && (emailInput !== "")) {
            alert("Welcome " + nameInput + ", we have recieved your details. Thank you for visiting our site. The next page shows response to your request. Enable pop ups to view confirmation.");
            event(nameInput, emailInput);
        } else {
            alert("blank inputs not allowed")
            event.preventDefault();
        }
        var nameInput = $('input#mce-FNAME').val("");
        var emailInput = $('input#mce-EMAIL').val("");
    })



});