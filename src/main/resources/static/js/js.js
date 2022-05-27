$(document).ready(function(){
    
    let numItems = $('.d-none-img').length	

    var vid = document.getElementById("video_player");
    vid.autoplay = true;
    vid.load();

    $('.d-none-img').hide()
    let count = 0;
    if(count == 0){
        vid.play();
    }else{
        vid.autoplay = false;
        vid.pause();
    }
    $(".d-none-img").eq(count).show();
    $("#next").click(function() {
      count = count + 1;
      if(count > (numItems-1)) {
        count = 0;
    } 
      $(".d-none-img").removeClass("animate__animated animate__fadeInRight");
      $('.d-none-img').hide()
      $(".d-none-img").eq(count).show();
      $(".d-none-img").eq(count).addClass("animate__animated animate__fadeIn");
        if(count == 0){
            vid.play();
        }else{
            vid.autoplay = false;
            vid.pause();
        }
    });
  
    $("#back").click(function() {
      count = count - 1;
      if(count < 0){
        count = numItems-1;
      }  
      $(".d-none-img").removeClass("animate__animated animate__fadeInRight");
      $('.d-none-img').hide()
      $(".d-none-img").eq(count).show();
      $(".d-none-img").eq(count).addClass("animate__animated animate__fadeIn");
        if(count == 0){
            vid.play();
        }else{
            vid.autoplay = false;
            vid.pause();
        }
    });

    $('#video_player').on('ended',function(){
        count = count+1;
        $(".d-none-img").removeClass("animate__animated animate__fadeInRight");
        $('.d-none-img').hide()
        $(".d-none-img").eq(count).show();
        $(".d-none-img").eq(count).addClass("animate__animated animate__fadeIn");
        if(count == 0){
            vid.play();
        }else{
            vid.autoplay = false;
            vid.pause();
        }
    });

   
        var media = document.getElementById('video_player');
        media.addEventListener("pause", function() { 
            if(count == 0){
                alert('aaaa')
            }
        });

        $( "#video_player" ).click(function() {
            vid.pause();
          });  

        //   $('.single-item').slick();
          $('.contain-slick').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
          });
  });



