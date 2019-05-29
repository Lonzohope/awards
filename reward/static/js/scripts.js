// Animations init
// new WOW().init();

// var element =  document.querySelector('.my-element')
// element.h1.add('animated', 'pulse')

// $('.carousel-3d-controls').mdbCarousel3d();



$(document).ready(function(){
    upvote=0;
    $('#up').click(function(){
        upvote+=1
        $('.up').text(upvote)
    })
    

    downvote=0;
    $('#down').click(function(){
        downvote+=1
        $(".down").text(downvote)
    })
    
})
