let designText = "Design content";
let developText = "Development content";
let productText = "Product Text";



const des = document.querySelector("#design");
// des.innerHTML = designText;

const prod = document.getElementById("prod");
// prod.innerHTML = productText;

const dev = document.querySelector("#dev");
// dev.innerHTML = developText;









$(document).ready(function() {
    $(".social-text").hide();
    $(".social").click(function() {
        $(".social-text").hide();
        $("#div" + $(this).attr('target')).show();
    })
});