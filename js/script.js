$(document).ready(function() {
    // $(".social").click(function() {
    //     // alert("facebook");
    //     $(".social-text").hide();
    //     $("#div1").show();

    // });
    $(".social-text").hide();
    $(".social").click(function() {
        $(".social-text").hide();
        $("#div" + $(this).attr('target')).show();
    })
});