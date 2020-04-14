//Landing Page Image Change Destkop View

$(function() {
  $('.text1').hover(function() {
      $('#background').css('background-image', 'url(../img/home/scooter.png)');
  })
});
$(function() {
  $('.text2').mouseover(function() {
      $('#background').css('background-image', 'url(../img/home/smart.png)');
  })
});
$(function() {
  $('.text3').mouseover(function() {
      $('#background').css('background-image', 'url(../img/home/post.png)');
  })
});
$(function() {
  $('.text4').mouseover(function() {
    $('#background').css('background-image', 'url(../img/home/bosch.png)');     
    })  
  });
$(function() {
  $('.text5').mouseover(function() {
    $('#background').css('background-image', 'url(../img/home/opto.png)');     
    })  
  });
$(function() {
  $('.text6').mouseover(function() {
      $('#background').css('background-image', 'url(../img/home/lucie.png)');
  })
});
// $(function() {
  //   $('.text5').mouseover(function() {
  //     $('#background').animate({ opacity: 0 }, { duration: 100 });
  //     setTimeout(function() {
  //       $('#background').delay(200).css('background-image', 'url(../img/home/opto.png)').animate({ opacity: 1 }, { duration: 300 });
  //      }, 100);
  //     })  
  //   });





//Landing Page iPad & Handy Animation
  $(function () {
          var i = 0;
          $('#responsive').css("background-image", "url(../img/home/" + images[i] + ")");
          setInterval(function () {
              i++;
              if (i == images.length) {
                  i = 0;
              }
  //             $('#responsive').fadeOut("slow", function () {
  //                 $(this).css("background-image", "url(../img/home/" + images[i] + ")");
  //                 $(this).fadeIn("slow");
  //             });
                    $('#responsive').css("background-image", "url(../img/home/" + images[i] + ")");
          }, 1500);
      });



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
  
  
  
  
  

