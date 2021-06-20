// let designText = document.getElementById("designText").innerHTML;
// // console.log(designText.innerHTML);
// let developText = document.querySelector("#developText").innerHTML;
// let productText = document.querySelector("#productText").innerHTML;


// //acces the divs
// let dev = document.getElementById("develop");
// let prod = document.getElementById("product");
// let des = document.getElementById("design");

// // creating functions for access

// let prodLoad = function() {
//     const prod = document.getElementById('product');
//     prod.innerHTML = productText;
// }
// let devLoad = function() {
//     const dev = document.getElementById('develop');
//     dev.innerHTML = developText;
// }

// // const dess = document.getElementById("design");
// // alert(dess.innerHTML);
// // let desLoad = function() {
// //     alert(dess);
// //     if (des.innerHTML === designText) {

// //         des.innerHTML = dess.innerHTML;
// //         // alert(des.innerHTML)
// //     } else {

// //         des.innerHTML = designText;
// //     }
// // }


// // //call the events
// //des.addEventListener('click', desLoad); //designText.addEventListener('click', designLoad);
// // //des.innerHTML.addEventListener('click', alert("new "));
// prod.addEventListener('click', prodLoad);
// dev.addEventListener('click', devLoad)




$(document).ready(function() {
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





});
// $(document).ready(function() {
//     $("#work2").mouseover(function() {
//         $('#overlay1').show();

//         // alert("a");
//     }).mouseout(function() {
//         $('#overlay1').hide();
//     });

// });