//Landing Page Image Change Destkop View

// $(function() {
//   $('.text1').hover(function() {
//       $('#background').css('background-image', 'url(../img/home/scooter.png)');
//   })
// });


  //Landing Page iPad & Handy Animation
    $(function () {
            var i = 0;
            $('#background2').css("background-image", "url(../img/home/" + images[i] + ")");
            setInterval(function () {
                i++;
                if (i == images.length) {
                    i = 0;
                }
    //             $('#responsive').fadeOut("slow", function () {
    //                 $(this).css("background-image", "url(../img/home/" + images[i] + ")");
    //                 $(this).fadeIn("slow");
    //             });
                      $('#background2').css("background-image", "url(../img/home/" + images[i] + ")");
            }, 1500);
        });
  
  
  
  
  

