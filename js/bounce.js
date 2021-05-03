$(".rubberBand").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
    $(this).removeClass("animated")  
  })
  
  $(".rubberBand").hover(function(){
    $(this).addClass("animated");        
  })


// $(document).ready(function () {
//     var letters = $('h1').text();
//     var nHTML = '';
//     for (var letter of letters) {
//       nHTML += "<span class='n'>" + letter + "</span>";
//     }
//     $('h1').html(nHTML);
//   })