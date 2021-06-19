let designText = "Design content";
let developText = "Development content";
let productText = "Product Text";


//acces the divs
const dev = document.querySelector("#develop");
const prod = document.getElementById("product");
const des = document.getElementById("design");
let devLoad = function() {
        dev.innerHTML = developText;
    }
    // creating functions for access

let prodLoad = function() {
    prod.innerHTML = productText;
}

function desLoad() {
    des.innerHTML = designText;
}



//call the events
des.addEventListener('click', desLoad);
prod.addEventListener('click', prodLoad);
dev.addEventListener('click', devLoad)


// function allclicks(item, func) {
//     item.addEventListener('click', func);
// }
// allclicks(des, )

$(document).ready(function() {
    $(".social-text").hide();
    $(".social").click(function() {
        $(".social-text").hide();
        $("#div" + $(this).attr('target')).show();
    })
});