// object-fit polyfill run
objectFitImages();

/* init Jarallax */
jarallax(document.querySelectorAll('.jarallax'));

jarallax(document.querySelectorAll('.jarallax-keep-img'), {
    keepImg: true,
});

// document.addEventListener("DOMContentLoaded", function(event) { 
//     window.addEventListener('scroll', function() {
//         var y_scroll_pos = window.pageYOffset;
//         var scroll_pos_test = 200 // Edit this number to define how far down the page the div fades in.
        
//         if(y_scroll_pos > scroll_pos_test) {
//             document.querySelector('#header').style.opacity
//             // fadeTo(500, 1);
//         }
//     });
// });

// $(document).ready(function(){

//     $(window).on('scroll', function() {
//     var y_scroll_pos = window.pageYOffset;
//     var scroll_pos_test = 200 // Edit this number to define how far down the page the div fades in.
    
//     if(y_scroll_pos > scroll_pos_test) {
//     $('#header').;
//     }
//     });
    
//     });
    