/* confirm("Working?"); */

function main() {


}

$('.subheading').mouseover(function(){
    $(this).toggleclass('alternate');
});

$('.subheading').hover(function(){
    $(this).toggleclass(".alternate");
    }, function(){
    $(this).css(".subheading");
});

$(document).ready(main);
